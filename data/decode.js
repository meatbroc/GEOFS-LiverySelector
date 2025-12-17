var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
$root.Mp = (function() {
    function Mp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Mp.prototype.disabled = null;
    Mp.prototype.array = null;
    var $oneOfFields;
    Object.defineProperty(Mp.prototype, "value", {
        get: $util.oneOfGetter($oneOfFields = ["disabled", "array"]),
        set: $util.oneOfSetter($oneOfFields)
    });
    Mp.create = function create(properties) {
        return new Mp(properties);
    };
    Mp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.disabled != null && Object.hasOwnProperty.call(message, "disabled"))
            writer.uint32(10).string(message.disabled);
        if (message.array != null && Object.hasOwnProperty.call(message, "array"))
            $root.Mp.MpArray.encode(message.array, writer.uint32(18).fork()).ldelim();
        return writer;
    };
    Mp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Mp.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.disabled = reader.string();
                    break;
                }
            case 2: {
                    message.array = $root.Mp.MpArray.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Mp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Mp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.disabled != null && message.hasOwnProperty("disabled")) {
            properties.value = 1;
            if (!$util.isString(message.disabled))
                return "disabled: string expected";
        }
        if (message.array != null && message.hasOwnProperty("array")) {
            if (properties.value === 1)
                return "value: multiple values";
            properties.value = 1;
            {
                var error = $root.Mp.MpArray.verify(message.array);
                if (error)
                    return "array." + error;
            }
        }
        return null;
    };
    Mp.fromObject = function fromObject(object) {
        if (object instanceof $root.Mp)
            return object;
        var message = new $root.Mp();
        if (object.disabled != null)
            message.disabled = String(object.disabled);
        if (object.array != null) {
            if (typeof object.array !== "object")
                throw TypeError(".Mp.array: object expected");
            message.array = $root.Mp.MpArray.fromObject(object.array);
        }
        return message;
    };
    Mp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.disabled != null && message.hasOwnProperty("disabled")) {
            object.disabled = message.disabled;
            if (options.oneofs)
                object.value = "disabled";
        }
        if (message.array != null && message.hasOwnProperty("array")) {
            object.array = $root.Mp.MpArray.toObject(message.array, options);
            if (options.oneofs)
                object.value = "array";
        }
        return object;
    };
    Mp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    Mp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Mp";
    };
    Mp.MpArray = (function() {
        function MpArray(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        MpArray.prototype.items = $util.emptyArray;
        MpArray.create = function create(properties) {
            return new MpArray(properties);
        };
        MpArray.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.Mp.MpArray.MpItem.encode(message.items[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };
        MpArray.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        MpArray.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mp.MpArray();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.Mp.MpArray.MpItem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
        MpArray.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        MpArray.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.Mp.MpArray.MpItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };
        MpArray.fromObject = function fromObject(object) {
            if (object instanceof $root.Mp.MpArray)
                return object;
            var message = new $root.Mp.MpArray();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".Mp.MpArray.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".Mp.MpArray.items: object expected");
                    message.items[i] = $root.Mp.MpArray.MpItem.fromObject(object.items[i]);
                }
            }
            return message;
        };
        MpArray.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.Mp.MpArray.MpItem.toObject(message.items[j], options);
            }
            return object;
        };
        MpArray.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        MpArray.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Mp.MpArray";
        };
        MpArray.MpItem = (function() {
            function MpItem(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            MpItem.prototype.modelIndex = 0;
            MpItem.prototype.textureIndex = 0;
            MpItem.prototype.mosaic = null;
            MpItem.prototype.material = 0;
            MpItem.create = function create(properties) {
                return new MpItem(properties);
            };
            MpItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.modelIndex != null && Object.hasOwnProperty.call(message, "modelIndex"))
                    writer.uint32(8).int32(message.modelIndex);
                if (message.textureIndex != null && Object.hasOwnProperty.call(message, "textureIndex"))
                    writer.uint32(16).int32(message.textureIndex);
                if (message.mosaic != null && Object.hasOwnProperty.call(message, "mosaic"))
                    $root.Mp.MpArray.MpItem.MpMosaic.encode(message.mosaic, writer.uint32(26).fork()).ldelim();
                if (message.material != null && Object.hasOwnProperty.call(message, "material"))
                    writer.uint32(32).int32(message.material);
                return writer;
            };
            MpItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            MpItem.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mp.MpArray.MpItem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.modelIndex = reader.int32();
                            break;
                        }
                    case 2: {
                            message.textureIndex = reader.int32();
                            break;
                        }
                    case 3: {
                            message.mosaic = $root.Mp.MpArray.MpItem.MpMosaic.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.material = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
            MpItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            MpItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.modelIndex != null && message.hasOwnProperty("modelIndex"))
                    if (!$util.isInteger(message.modelIndex))
                        return "modelIndex: integer expected";
                if (message.textureIndex != null && message.hasOwnProperty("textureIndex"))
                    if (!$util.isInteger(message.textureIndex))
                        return "textureIndex: integer expected";
                if (message.mosaic != null && message.hasOwnProperty("mosaic")) {
                    var error = $root.Mp.MpArray.MpItem.MpMosaic.verify(message.mosaic);
                    if (error)
                        return "mosaic." + error;
                }
                if (message.material != null && message.hasOwnProperty("material"))
                    if (!$util.isInteger(message.material))
                        return "material: integer expected";
                return null;
            };
            MpItem.fromObject = function fromObject(object) {
                if (object instanceof $root.Mp.MpArray.MpItem)
                    return object;
                var message = new $root.Mp.MpArray.MpItem();
                if (object.modelIndex != null)
                    message.modelIndex = object.modelIndex | 0;
                if (object.textureIndex != null)
                    message.textureIndex = object.textureIndex | 0;
                if (object.mosaic != null) {
                    if (typeof object.mosaic !== "object")
                        throw TypeError(".Mp.MpArray.MpItem.mosaic: object expected");
                    message.mosaic = $root.Mp.MpArray.MpItem.MpMosaic.fromObject(object.mosaic);
                }
                if (object.material != null)
                    message.material = object.material | 0;
                return message;
            };
            MpItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.modelIndex = 0;
                    object.textureIndex = 0;
                    object.mosaic = null;
                    object.material = 0;
                }
                if (message.modelIndex != null && message.hasOwnProperty("modelIndex"))
                    object.modelIndex = message.modelIndex;
                if (message.textureIndex != null && message.hasOwnProperty("textureIndex"))
                    object.textureIndex = message.textureIndex;
                if (message.mosaic != null && message.hasOwnProperty("mosaic"))
                    object.mosaic = $root.Mp.MpArray.MpItem.MpMosaic.toObject(message.mosaic, options);
                if (message.material != null && message.hasOwnProperty("material"))
                    object.material = message.material;
                return object;
            };
            MpItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            MpItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Mp.MpArray.MpItem";
            };
            MpItem.MpMosaic = (function() {
                function MpMosaic(properties) {
                    this.tiles = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
                MpMosaic.prototype.base = "";
                MpMosaic.prototype.tiles = $util.emptyArray;
                MpMosaic.create = function create(properties) {
                    return new MpMosaic(properties);
                };
                MpMosaic.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                        writer.uint32(10).string(message.base);
                    if (message.tiles != null && message.tiles.length)
                        for (var i = 0; i < message.tiles.length; ++i)
                            $root.Mp.MpArray.MpItem.MpMosaic.Tile.encode(message.tiles[i], writer.uint32(18).fork()).ldelim();
                    return writer;
                };
                MpMosaic.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
                MpMosaic.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mp.MpArray.MpItem.MpMosaic();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.base = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.tiles && message.tiles.length))
                                    message.tiles = [];
                                message.tiles.push($root.Mp.MpArray.MpItem.MpMosaic.Tile.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
                MpMosaic.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
                MpMosaic.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.base != null && message.hasOwnProperty("base"))
                        if (!$util.isString(message.base))
                            return "base: string expected";
                    if (message.tiles != null && message.hasOwnProperty("tiles")) {
                        if (!Array.isArray(message.tiles))
                            return "tiles: array expected";
                        for (var i = 0; i < message.tiles.length; ++i) {
                            var error = $root.Mp.MpArray.MpItem.MpMosaic.Tile.verify(message.tiles[i]);
                            if (error)
                                return "tiles." + error;
                        }
                    }
                    return null;
                };
                MpMosaic.fromObject = function fromObject(object) {
                    if (object instanceof $root.Mp.MpArray.MpItem.MpMosaic)
                        return object;
                    var message = new $root.Mp.MpArray.MpItem.MpMosaic();
                    if (object.base != null)
                        message.base = String(object.base);
                    if (object.tiles) {
                        if (!Array.isArray(object.tiles))
                            throw TypeError(".Mp.MpArray.MpItem.MpMosaic.tiles: array expected");
                        message.tiles = [];
                        for (var i = 0; i < object.tiles.length; ++i) {
                            if (typeof object.tiles[i] !== "object")
                                throw TypeError(".Mp.MpArray.MpItem.MpMosaic.tiles: object expected");
                            message.tiles[i] = $root.Mp.MpArray.MpItem.MpMosaic.Tile.fromObject(object.tiles[i]);
                        }
                    }
                    return message;
                };
                MpMosaic.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.tiles = [];
                    if (options.defaults)
                        object.base = "";
                    if (message.base != null && message.hasOwnProperty("base"))
                        object.base = message.base;
                    if (message.tiles && message.tiles.length) {
                        object.tiles = [];
                        for (var j = 0; j < message.tiles.length; ++j)
                            object.tiles[j] = $root.Mp.MpArray.MpItem.MpMosaic.Tile.toObject(message.tiles[j], options);
                    }
                    return object;
                };
                MpMosaic.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                MpMosaic.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Mp.MpArray.MpItem.MpMosaic";
                };
                MpMosaic.Tile = (function() {
                    function Tile(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
                    Tile.prototype.textureIndex = 0;
                    Tile.prototype.sx = 0;
                    Tile.prototype.sy = 0;
                    Tile.prototype.sw = 0;
                    Tile.prototype.sh = 0;
                    Tile.prototype.dx = 0;
                    Tile.prototype.dy = 0;
                    Tile.prototype.dw = 0;
                    Tile.prototype.dh = 0;
                    Tile.create = function create(properties) {
                        return new Tile(properties);
                    };
                    Tile.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.textureIndex != null && Object.hasOwnProperty.call(message, "textureIndex"))
                            writer.uint32(8).int32(message.textureIndex);
                        if (message.sx != null && Object.hasOwnProperty.call(message, "sx"))
                            writer.uint32(16).int32(message.sx);
                        if (message.sy != null && Object.hasOwnProperty.call(message, "sy"))
                            writer.uint32(24).int32(message.sy);
                        if (message.sw != null && Object.hasOwnProperty.call(message, "sw"))
                            writer.uint32(32).int32(message.sw);
                        if (message.sh != null && Object.hasOwnProperty.call(message, "sh"))
                            writer.uint32(40).int32(message.sh);
                        if (message.dx != null && Object.hasOwnProperty.call(message, "dx"))
                            writer.uint32(48).int32(message.dx);
                        if (message.dy != null && Object.hasOwnProperty.call(message, "dy"))
                            writer.uint32(56).int32(message.dy);
                        if (message.dw != null && Object.hasOwnProperty.call(message, "dw"))
                            writer.uint32(64).int32(message.dw);
                        if (message.dh != null && Object.hasOwnProperty.call(message, "dh"))
                            writer.uint32(72).int32(message.dh);
                        return writer;
                    };
                    Tile.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
                    Tile.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Mp.MpArray.MpItem.MpMosaic.Tile();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.textureIndex = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.sx = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.sy = reader.int32();
                                    break;
                                }
                            case 4: {
                                    message.sw = reader.int32();
                                    break;
                                }
                            case 5: {
                                    message.sh = reader.int32();
                                    break;
                                }
                            case 6: {
                                    message.dx = reader.int32();
                                    break;
                                }
                            case 7: {
                                    message.dy = reader.int32();
                                    break;
                                }
                            case 8: {
                                    message.dw = reader.int32();
                                    break;
                                }
                            case 9: {
                                    message.dh = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
                    Tile.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
                    Tile.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.textureIndex != null && message.hasOwnProperty("textureIndex"))
                            if (!$util.isInteger(message.textureIndex))
                                return "textureIndex: integer expected";
                        if (message.sx != null && message.hasOwnProperty("sx"))
                            if (!$util.isInteger(message.sx))
                                return "sx: integer expected";
                        if (message.sy != null && message.hasOwnProperty("sy"))
                            if (!$util.isInteger(message.sy))
                                return "sy: integer expected";
                        if (message.sw != null && message.hasOwnProperty("sw"))
                            if (!$util.isInteger(message.sw))
                                return "sw: integer expected";
                        if (message.sh != null && message.hasOwnProperty("sh"))
                            if (!$util.isInteger(message.sh))
                                return "sh: integer expected";
                        if (message.dx != null && message.hasOwnProperty("dx"))
                            if (!$util.isInteger(message.dx))
                                return "dx: integer expected";
                        if (message.dy != null && message.hasOwnProperty("dy"))
                            if (!$util.isInteger(message.dy))
                                return "dy: integer expected";
                        if (message.dw != null && message.hasOwnProperty("dw"))
                            if (!$util.isInteger(message.dw))
                                return "dw: integer expected";
                        if (message.dh != null && message.hasOwnProperty("dh"))
                            if (!$util.isInteger(message.dh))
                                return "dh: integer expected";
                        return null;
                    };
                    Tile.fromObject = function fromObject(object) {
                        if (object instanceof $root.Mp.MpArray.MpItem.MpMosaic.Tile)
                            return object;
                        var message = new $root.Mp.MpArray.MpItem.MpMosaic.Tile();
                        if (object.textureIndex != null)
                            message.textureIndex = object.textureIndex | 0;
                        if (object.sx != null)
                            message.sx = object.sx | 0;
                        if (object.sy != null)
                            message.sy = object.sy | 0;
                        if (object.sw != null)
                            message.sw = object.sw | 0;
                        if (object.sh != null)
                            message.sh = object.sh | 0;
                        if (object.dx != null)
                            message.dx = object.dx | 0;
                        if (object.dy != null)
                            message.dy = object.dy | 0;
                        if (object.dw != null)
                            message.dw = object.dw | 0;
                        if (object.dh != null)
                            message.dh = object.dh | 0;
                        return message;
                    };
                    Tile.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.textureIndex = 0;
                            object.sx = 0;
                            object.sy = 0;
                            object.sw = 0;
                            object.sh = 0;
                            object.dx = 0;
                            object.dy = 0;
                            object.dw = 0;
                            object.dh = 0;
                        }
                        if (message.textureIndex != null && message.hasOwnProperty("textureIndex"))
                            object.textureIndex = message.textureIndex;
                        if (message.sx != null && message.hasOwnProperty("sx"))
                            object.sx = message.sx;
                        if (message.sy != null && message.hasOwnProperty("sy"))
                            object.sy = message.sy;
                        if (message.sw != null && message.hasOwnProperty("sw"))
                            object.sw = message.sw;
                        if (message.sh != null && message.hasOwnProperty("sh"))
                            object.sh = message.sh;
                        if (message.dx != null && message.hasOwnProperty("dx"))
                            object.dx = message.dx;
                        if (message.dy != null && message.hasOwnProperty("dy"))
                            object.dy = message.dy;
                        if (message.dw != null && message.hasOwnProperty("dw"))
                            object.dw = message.dw;
                        if (message.dh != null && message.hasOwnProperty("dh"))
                            object.dh = message.dh;
                        return object;
                    };
                    Tile.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
                    Tile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/Mp.MpArray.MpItem.MpMosaic.Tile";
                    };
                    return Tile;
                })();
                return MpMosaic;
            })();
            return MpItem;
        })();
        return MpArray;
    })();
    return Mp;
})();
$root.TextureType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    return values;
})();
$root.Livery = (function() {
    function Livery(properties) {
        this.texture = [];
        this.materials = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Livery.prototype.name = "";
    Livery.prototype.texture = $util.emptyArray;
    Livery.prototype.credits = "";
    Livery.prototype.materials = $util.emptyArray;
    Livery.create = function create(properties) {
        return new Livery(properties);
    };
    Livery.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(10).string(message.name);
        if (message.texture != null && message.texture.length)
            for (var i = 0; i < message.texture.length; ++i)
                $root.Livery.Texture.encode(message.texture[i], writer.uint32(18).fork()).ldelim();
        if (message.credits != null && Object.hasOwnProperty.call(message, "credits"))
            writer.uint32(26).string(message.credits);
        if (message.materials != null && message.materials.length)
            for (var i = 0; i < message.materials.length; ++i)
                $root.Livery.Material.encode(message.materials[i], writer.uint32(34).fork()).ldelim();
        return writer;
    };
    Livery.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Livery.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Livery();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.texture && message.texture.length))
                        message.texture = [];
                    message.texture.push($root.Livery.Texture.decode(reader, reader.uint32()));
                    break;
                }
            case 3: {
                    message.credits = reader.string();
                    break;
                }
            case 4: {
                    if (!(message.materials && message.materials.length))
                        message.materials = [];
                    message.materials.push($root.Livery.Material.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Livery.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Livery.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.texture != null && message.hasOwnProperty("texture")) {
            if (!Array.isArray(message.texture))
                return "texture: array expected";
            for (var i = 0; i < message.texture.length; ++i) {
                var error = $root.Livery.Texture.verify(message.texture[i]);
                if (error)
                    return "texture." + error;
            }
        }
        if (message.credits != null && message.hasOwnProperty("credits"))
            if (!$util.isString(message.credits))
                return "credits: string expected";
        if (message.materials != null && message.hasOwnProperty("materials")) {
            if (!Array.isArray(message.materials))
                return "materials: array expected";
            for (var i = 0; i < message.materials.length; ++i) {
                var error = $root.Livery.Material.verify(message.materials[i]);
                if (error)
                    return "materials." + error;
            }
        }
        return null;
    };
    Livery.fromObject = function fromObject(object) {
        if (object instanceof $root.Livery)
            return object;
        var message = new $root.Livery();
        if (object.name != null)
            message.name = String(object.name);
        if (object.texture) {
            if (!Array.isArray(object.texture))
                throw TypeError(".Livery.texture: array expected");
            message.texture = [];
            for (var i = 0; i < object.texture.length; ++i) {
                if (typeof object.texture[i] !== "object")
                    throw TypeError(".Livery.texture: object expected");
                message.texture[i] = $root.Livery.Texture.fromObject(object.texture[i]);
            }
        }
        if (object.credits != null)
            message.credits = String(object.credits);
        if (object.materials) {
            if (!Array.isArray(object.materials))
                throw TypeError(".Livery.materials: array expected");
            message.materials = [];
            for (var i = 0; i < object.materials.length; ++i) {
                if (typeof object.materials[i] !== "object")
                    throw TypeError(".Livery.materials: object expected");
                message.materials[i] = $root.Livery.Material.fromObject(object.materials[i]);
            }
        }
        return message;
    };
    Livery.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.texture = [];
            object.materials = [];
        }
        if (options.defaults) {
            object.name = "";
            object.credits = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.texture && message.texture.length) {
            object.texture = [];
            for (var j = 0; j < message.texture.length; ++j)
                object.texture[j] = $root.Livery.Texture.toObject(message.texture[j], options);
        }
        if (message.credits != null && message.hasOwnProperty("credits"))
            object.credits = message.credits;
        if (message.materials && message.materials.length) {
            object.materials = [];
            for (var j = 0; j < message.materials.length; ++j)
                object.materials[j] = $root.Livery.Material.toObject(message.materials[j], options);
        }
        return object;
    };
    Livery.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    Livery.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Livery";
    };
    Livery.Texture = (function() {
        function Texture(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        Texture.prototype.path = null;
        Texture.prototype.material = null;
        var $oneOfFields;
        Object.defineProperty(Texture.prototype, "tex", {
            get: $util.oneOfGetter($oneOfFields = ["path", "material"]),
            set: $util.oneOfSetter($oneOfFields)
        });
        Texture.create = function create(properties) {
            return new Texture(properties);
        };
        Texture.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(10).string(message.path);
            if (message.material != null && Object.hasOwnProperty.call(message, "material"))
                $root.Livery.Texture.MaterialReference.encode(message.material, writer.uint32(18).fork()).ldelim();
            return writer;
        };
        Texture.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        Texture.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Livery.Texture();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.path = reader.string();
                        break;
                    }
                case 2: {
                        message.material = $root.Livery.Texture.MaterialReference.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
        Texture.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        Texture.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.path != null && message.hasOwnProperty("path")) {
                properties.tex = 1;
                if (!$util.isString(message.path))
                    return "path: string expected";
            }
            if (message.material != null && message.hasOwnProperty("material")) {
                if (properties.tex === 1)
                    return "tex: multiple values";
                properties.tex = 1;
                {
                    var error = $root.Livery.Texture.MaterialReference.verify(message.material);
                    if (error)
                        return "material." + error;
                }
            }
            return null;
        };
        Texture.fromObject = function fromObject(object) {
            if (object instanceof $root.Livery.Texture)
                return object;
            var message = new $root.Livery.Texture();
            if (object.path != null)
                message.path = String(object.path);
            if (object.material != null) {
                if (typeof object.material !== "object")
                    throw TypeError(".Livery.Texture.material: object expected");
                message.material = $root.Livery.Texture.MaterialReference.fromObject(object.material);
            }
            return message;
        };
        Texture.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.path != null && message.hasOwnProperty("path")) {
                object.path = message.path;
                if (options.oneofs)
                    object.tex = "path";
            }
            if (message.material != null && message.hasOwnProperty("material")) {
                object.material = $root.Livery.Texture.MaterialReference.toObject(message.material, options);
                if (options.oneofs)
                    object.tex = "material";
            }
            return object;
        };
        Texture.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        Texture.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Livery.Texture";
        };
        Texture.MaterialReference = (function() {
            function MaterialReference(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            MaterialReference.prototype.material = 0;
            MaterialReference.create = function create(properties) {
                return new MaterialReference(properties);
            };
            MaterialReference.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.material != null && Object.hasOwnProperty.call(message, "material"))
                    writer.uint32(8).int32(message.material);
                return writer;
            };
            MaterialReference.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            MaterialReference.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Livery.Texture.MaterialReference();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.material = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
            MaterialReference.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            MaterialReference.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.material != null && message.hasOwnProperty("material"))
                    if (!$util.isInteger(message.material))
                        return "material: integer expected";
                return null;
            };
            MaterialReference.fromObject = function fromObject(object) {
                if (object instanceof $root.Livery.Texture.MaterialReference)
                    return object;
                var message = new $root.Livery.Texture.MaterialReference();
                if (object.material != null)
                    message.material = object.material | 0;
                return message;
            };
            MaterialReference.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.material = 0;
                if (message.material != null && message.hasOwnProperty("material"))
                    object.material = message.material;
                return object;
            };
            MaterialReference.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            MaterialReference.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Livery.Texture.MaterialReference";
            };
            return MaterialReference;
        })();
        return Texture;
    })();
    Livery.Material = (function() {
        function Material(properties) {
            this.diffuse = [];
            this.baseColorFactor = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        Material.prototype.name = "";
        Material.prototype.diffuse = $util.emptyArray;
        Material.prototype.baseColorFactor = $util.emptyArray;
        Material.create = function create(properties) {
            return new Material(properties);
        };
        Material.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(10).string(message.name);
            if (message.diffuse != null && message.diffuse.length) {
                writer.uint32(18).fork();
                for (var i = 0; i < message.diffuse.length; ++i)
                    writer.double(message.diffuse[i]);
                writer.ldelim();
            }
            if (message.baseColorFactor != null && message.baseColorFactor.length) {
                writer.uint32(26).fork();
                for (var i = 0; i < message.baseColorFactor.length; ++i)
                    writer.double(message.baseColorFactor[i]);
                writer.ldelim();
            }
            return writer;
        };
        Material.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        Material.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Livery.Material();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.diffuse && message.diffuse.length))
                            message.diffuse = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.diffuse.push(reader.double());
                        } else
                            message.diffuse.push(reader.double());
                        break;
                    }
                case 3: {
                        if (!(message.baseColorFactor && message.baseColorFactor.length))
                            message.baseColorFactor = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.baseColorFactor.push(reader.double());
                        } else
                            message.baseColorFactor.push(reader.double());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
        Material.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        Material.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.diffuse != null && message.hasOwnProperty("diffuse")) {
                if (!Array.isArray(message.diffuse))
                    return "diffuse: array expected";
                for (var i = 0; i < message.diffuse.length; ++i)
                    if (typeof message.diffuse[i] !== "number")
                        return "diffuse: number[] expected";
            }
            if (message.baseColorFactor != null && message.hasOwnProperty("baseColorFactor")) {
                if (!Array.isArray(message.baseColorFactor))
                    return "baseColorFactor: array expected";
                for (var i = 0; i < message.baseColorFactor.length; ++i)
                    if (typeof message.baseColorFactor[i] !== "number")
                        return "baseColorFactor: number[] expected";
            }
            return null;
        };
        Material.fromObject = function fromObject(object) {
            if (object instanceof $root.Livery.Material)
                return object;
            var message = new $root.Livery.Material();
            if (object.name != null)
                message.name = String(object.name);
            if (object.diffuse) {
                if (!Array.isArray(object.diffuse))
                    throw TypeError(".Livery.Material.diffuse: array expected");
                message.diffuse = [];
                for (var i = 0; i < object.diffuse.length; ++i)
                    message.diffuse[i] = Number(object.diffuse[i]);
            }
            if (object.baseColorFactor) {
                if (!Array.isArray(object.baseColorFactor))
                    throw TypeError(".Livery.Material.baseColorFactor: array expected");
                message.baseColorFactor = [];
                for (var i = 0; i < object.baseColorFactor.length; ++i)
                    message.baseColorFactor[i] = Number(object.baseColorFactor[i]);
            }
            return message;
        };
        Material.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.diffuse = [];
                object.baseColorFactor = [];
            }
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.diffuse && message.diffuse.length) {
                object.diffuse = [];
                for (var j = 0; j < message.diffuse.length; ++j)
                    object.diffuse[j] = options.json && !isFinite(message.diffuse[j]) ? String(message.diffuse[j]) : message.diffuse[j];
            }
            if (message.baseColorFactor && message.baseColorFactor.length) {
                object.baseColorFactor = [];
                for (var j = 0; j < message.baseColorFactor.length; ++j)
                    object.baseColorFactor[j] = options.json && !isFinite(message.baseColorFactor[j]) ? String(message.baseColorFactor[j]) : message.baseColorFactor[j];
            }
            return object;
        };
        Material.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        Material.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Livery.Material";
        };
        return Material;
    })();
    return Livery;
})();
$root.Aircraft = (function() {
    function Aircraft(properties) {
        this.index = [];
        this.parts = [];
        this.liveries = [];
        this.labels = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    Aircraft.prototype.index = $util.emptyArray;
    Aircraft.prototype.parts = $util.emptyArray;
    Aircraft.prototype.mp = null;
    Aircraft.prototype.liveries = $util.emptyArray;
    Aircraft.prototype.labels = $util.emptyArray;
    Aircraft.prototype.name = "";
    Aircraft.create = function create(properties) {
        return new Aircraft(properties);
    };
    Aircraft.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.index != null && message.index.length) {
            writer.uint32(10).fork();
            for (var i = 0; i < message.index.length; ++i)
                writer.int32(message.index[i]);
            writer.ldelim();
        }
        if (message.parts != null && message.parts.length) {
            writer.uint32(18).fork();
            for (var i = 0; i < message.parts.length; ++i)
                writer.int32(message.parts[i]);
            writer.ldelim();
        }
        if (message.mp != null && Object.hasOwnProperty.call(message, "mp"))
            $root.Mp.encode(message.mp, writer.uint32(26).fork()).ldelim();
        if (message.liveries != null && message.liveries.length)
            for (var i = 0; i < message.liveries.length; ++i)
                $root.Livery.encode(message.liveries[i], writer.uint32(34).fork()).ldelim();
        if (message.labels != null && message.labels.length)
            for (var i = 0; i < message.labels.length; ++i)
                writer.uint32(42).string(message.labels[i]);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(50).string(message.name);
        return writer;
    };
    Aircraft.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    Aircraft.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Aircraft();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.index && message.index.length))
                        message.index = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.index.push(reader.int32());
                    } else
                        message.index.push(reader.int32());
                    break;
                }
            case 2: {
                    if (!(message.parts && message.parts.length))
                        message.parts = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.parts.push(reader.int32());
                    } else
                        message.parts.push(reader.int32());
                    break;
                }
            case 3: {
                    message.mp = $root.Mp.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    if (!(message.liveries && message.liveries.length))
                        message.liveries = [];
                    message.liveries.push($root.Livery.decode(reader, reader.uint32()));
                    break;
                }
            case 5: {
                    if (!(message.labels && message.labels.length))
                        message.labels = [];
                    message.labels.push(reader.string());
                    break;
                }
            case 6: {
                    message.name = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };
    Aircraft.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    Aircraft.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.index != null && message.hasOwnProperty("index")) {
            if (!Array.isArray(message.index))
                return "index: array expected";
            for (var i = 0; i < message.index.length; ++i)
                if (!$util.isInteger(message.index[i]))
                    return "index: integer[] expected";
        }
        if (message.parts != null && message.hasOwnProperty("parts")) {
            if (!Array.isArray(message.parts))
                return "parts: array expected";
            for (var i = 0; i < message.parts.length; ++i)
                if (!$util.isInteger(message.parts[i]))
                    return "parts: integer[] expected";
        }
        if (message.mp != null && message.hasOwnProperty("mp")) {
            var error = $root.Mp.verify(message.mp);
            if (error)
                return "mp." + error;
        }
        if (message.liveries != null && message.hasOwnProperty("liveries")) {
            if (!Array.isArray(message.liveries))
                return "liveries: array expected";
            for (var i = 0; i < message.liveries.length; ++i) {
                var error = $root.Livery.verify(message.liveries[i]);
                if (error)
                    return "liveries." + error;
            }
        }
        if (message.labels != null && message.hasOwnProperty("labels")) {
            if (!Array.isArray(message.labels))
                return "labels: array expected";
            for (var i = 0; i < message.labels.length; ++i)
                if (!$util.isString(message.labels[i]))
                    return "labels: string[] expected";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };
    Aircraft.fromObject = function fromObject(object) {
        if (object instanceof $root.Aircraft)
            return object;
        var message = new $root.Aircraft();
        if (object.index) {
            if (!Array.isArray(object.index))
                throw TypeError(".Aircraft.index: array expected");
            message.index = [];
            for (var i = 0; i < object.index.length; ++i)
                message.index[i] = object.index[i] | 0;
        }
        if (object.parts) {
            if (!Array.isArray(object.parts))
                throw TypeError(".Aircraft.parts: array expected");
            message.parts = [];
            for (var i = 0; i < object.parts.length; ++i)
                message.parts[i] = object.parts[i] | 0;
        }
        if (object.mp != null) {
            if (typeof object.mp !== "object")
                throw TypeError(".Aircraft.mp: object expected");
            message.mp = $root.Mp.fromObject(object.mp);
        }
        if (object.liveries) {
            if (!Array.isArray(object.liveries))
                throw TypeError(".Aircraft.liveries: array expected");
            message.liveries = [];
            for (var i = 0; i < object.liveries.length; ++i) {
                if (typeof object.liveries[i] !== "object")
                    throw TypeError(".Aircraft.liveries: object expected");
                message.liveries[i] = $root.Livery.fromObject(object.liveries[i]);
            }
        }
        if (object.labels) {
            if (!Array.isArray(object.labels))
                throw TypeError(".Aircraft.labels: array expected");
            message.labels = [];
            for (var i = 0; i < object.labels.length; ++i)
                message.labels[i] = String(object.labels[i]);
        }
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };
    Aircraft.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.index = [];
            object.parts = [];
            object.liveries = [];
            object.labels = [];
        }
        if (options.defaults) {
            object.mp = null;
            object.name = "";
        }
        if (message.index && message.index.length) {
            object.index = [];
            for (var j = 0; j < message.index.length; ++j)
                object.index[j] = message.index[j];
        }
        if (message.parts && message.parts.length) {
            object.parts = [];
            for (var j = 0; j < message.parts.length; ++j)
                object.parts[j] = message.parts[j];
        }
        if (message.mp != null && message.hasOwnProperty("mp"))
            object.mp = $root.Mp.toObject(message.mp, options);
        if (message.liveries && message.liveries.length) {
            object.liveries = [];
            for (var j = 0; j < message.liveries.length; ++j)
                object.liveries[j] = $root.Livery.toObject(message.liveries[j], options);
        }
        if (message.labels && message.labels.length) {
            object.labels = [];
            for (var j = 0; j < message.labels.length; ++j)
                object.labels[j] = message.labels[j];
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };
    Aircraft.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    Aircraft.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Aircraft";
    };
    return Aircraft;
})();
