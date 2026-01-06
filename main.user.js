window.LiverySelector = {
    VERSION: 0,
    url: "",
    _repo: "https://raw.githubusercontent.com/kolos26/GEOFS-LiverySelector/main",
    set repo(e) {this.util.validateURL(e) ? this._repo = e : this.util.log(e + " is not a valid URL", "error")},
    get repo() {return this._repo},
    _cdn: "https://cdn.jsdelivr.net/gh/kolos26/GEOFS-LiverySelector@main",
    set cdn(e) {this.util.validateURL(e) ? this._cdn = e : this.util.log(e + " is not a valid URL", "error")},
    get cdn() {return this._cdn},
    util: {
        log: (function () {
            const LOG_STYLE = "white-space:nowrap;display:inline;color:";
            return (e, t = "log") => {
                console[t]("%c[%cLivery%cSelector%c]%c", LOG_STYLE + "inherit;", LOG_STYLE + "#bcc3cb;", LOG_STYLE + "#3f5f8a;", LOG_STYLE + "inherit;", LOG_STYLE + "inherit;", e);
            }
        })(),
        getCommit: async function (e = "kolos26", t = "main") {
            var a = await fetch(`https://api.github.com/repos/${e}/GEOFS-LiverySelector/commits/${t}`, {headers: {"Accept": "application/vnd.github.sha"}});
            if (!a.ok) return false;
            var o = (await a.text()).trim();
            return /^[a-f0-9]{40}$/.test(o) ? o : false;
        },
        validateURL: e => {
            try {
                return new URL(e), true;
            } catch (t) {
                return false;
            }
        },
        testTextureIndex: function (e, t = 0) {
            var a = geofs.aircraft.instance.definition.parts[t]["3dmodel"]._model
            , o = a._rendererResources.textures[e];
            if (o.width !== o.height) window.LiverySelector.util.log("Index " + e + ": Non matching height and width", "warn");
            window.LiverySelector.util.log(`Index ${e}: ${o.width}x${o.height}`);
            geofs.api.changeModelTexture(a, `https://placehold.co/${o.width}x${o.height}/000000/FFFFFF.png`, {index: e});
        },
        downloadTextureIndex: function (e, T = 0) {
            const t = geofs.aircraft.instance.definition.parts[T]["3dmodel"]._model._rendererResources.textures[e];
            if (!t?._texture) return void console.warn("Invalid texture");
            const r = t._context._gl
            , n = t._width
            , a = t._height
            , o = r.createFramebuffer();
            r.bindFramebuffer(r.FRAMEBUFFER, o),
            r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, t._textureTarget, t._texture, 0);
            const c = r.checkFramebufferStatus(r.FRAMEBUFFER);
            if(c !== r.FRAMEBUFFER_COMPLETE) return console.error("Framebuffer incomplete:",c), void r.bindFramebuffer(r.FRAMEBUFFER,null);
            const f = new Uint8Array(n * a * 4);
            r.readPixels(0, 0, n, a, r.RGBA, r.UNSIGNED_BYTE, f),
            r.bindFramebuffer(r.FRAMEBUFFER, null),
            r.deleteFramebuffer(o);
            const u = document.createElement("canvas");
            u.width=n, u.height=a;
            const F = u.getContext("2d")
            , i = F.createImageData(n,a);
            i.data.set(f),
            F.putImageData(i,0,0),
            u.toBlob(t => {
                const r = document.createElement("a");
                r.href = URL.createObjectURL(t),
                r.download = `texture_${e}.png`,
                r.click(),
                URL.revokeObjectURL(r.href)
            });
        }
    },
    init: async function () {
        var e = await this.util.getCommit();
        if (!e) return void this.util.log("Unable to fetch latest commit", "error");
        this.cdn = this.cdn.replace("@main", "@" + e);
    },
    aircraft: {}, // liveryobj
    mp: {
        LS_OFFSET: 1e4,
        ML_OFFSET: 1e3,
        identifiers: {},
        liveries: {},
        airlineLiveries: {},
    },
    origHTMLs: null, // not sure, should remove
    airline: {
        WHITELIST: [],
        links: [],
        liveries: {},
    }
}
