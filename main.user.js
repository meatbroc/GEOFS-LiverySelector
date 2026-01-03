const LiverySelector = {
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
        getCommit: async function (e = "kolos26") {
            var t = await fetch(`https://api.github.com/repos/${e}/GEOFS-LiverySelector/commits/main`);
            if (!t.ok) return false;
            var a = (await t.json()).sha;
            return /^[a-f0-9]{40}$/.test(a) ? a : false;
        },
        validateURL: e => {
            try {
                return new URL(e), true;
            } catch (t) {
                return false;
            }
        },
        fetch: async function (e) {}
    },
    init: async function () {
        var e = await this.util.getCommit();
        if (e) {

        }
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