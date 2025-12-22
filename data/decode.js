window.executeOnEventDone("geofsInitialized", function () {
    var $Reader = window.protobuf.Reader;
    var $root = window.protobuf.roots["default"] || (window.protobuf.roots["default"] = {});
    $root.LiveryObject = (function () {
        function LiveryObject() {}
        LiveryObject.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LiveryObject();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                    case 1: {
                        message.version = reader.string();
                        break;
                    }
                    case 2: {
                        message.dapi = reader.string();
                        break;
                    }
                    case 3: {
                        message.mapi = reader.string();
                        break;
                    }
                    case 4: {
                        if (!(message.aircrafts && message.aircrafts.length))
                            message.aircrafts = [];
                        message.aircrafts.push($root.LiveryObject.Aircraft.decode(reader, reader.uint32()));
                    }
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
        }
        LiveryObject.MpItem = (function() {
            function MpItem() {}
            MpItem.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LiveryObject.MpItem();
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
                            message.mosaic = $root.LiveryObject.MpItem.MpMosaic.decode(reader, reader.uint32());
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
            MpItem.MpMosaic = (function() {
                function MpMosaic() {}
                MpMosaic.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LiveryObject.MpItem.MpMosaic();
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
                                message.tiles.push($root.LiveryObject.MpItem.MpMosaic.Tile.decode(reader, reader.uint32()));
                                break;
                            }
                        	default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                MpMosaic.Tile = (function() {
                    function Tile() {}
                    Tile.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LiveryObject.MpItem.MpMosaic.Tile();
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
                    return Tile;
                })();
                return MpMosaic;
            })();
            return MpItem;
        })();
        LiveryObject.Livery = (function() {
            function Livery() {}
            Livery.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LiveryObject.Livery();
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
                            message.texture.push($root.LiveryObject.Livery.Texture.decode(reader, reader.uint32()));
                            break;
                        }
                    	case 3: {
                            message.credits = reader.string();
                            break;
                        }
                    	case 4: {
                            if (!(message.materials && message.materials.length))
                                message.materials = [];
                            message.materials.push($root.LiveryObject.Livery.Material.decode(reader, reader.uint32()));
                            break;
                        }
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            Livery.Texture = (function() {
                function Texture() {}
                Texture.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LiveryObject.Livery.Texture();
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
                                message.material = $root.LiveryObject.Livery.Texture.MaterialReference.decode(reader, reader.uint32());
                                break;
                            }
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return message;
                };
                Texture.MaterialReference = (function() {
                    function MaterialReference() {}
                    MaterialReference.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LiveryObject.Livery.Texture.MaterialReference();
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
                    return MaterialReference;
                })();
                return Texture;
            })();
            Livery.Material = (function() {
                function Material() {}
                Material.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LiveryObject.Livery.Material();
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
                return Material;
            })();
            return Livery;
        })();
        LiveryObject.Aircraft = (function() {
            function Aircraft() {}
            Aircraft.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LiveryObject.Aircraft();
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
                            if (!(message.mp && message.mp.length))
                                message.mp = [];
                            message.mp.push($root.LiveryObject.MpItem.decode(reader, reader.uint32()));
                            break;
                        }
                    	case 4: {
                            if (!(message.liveries && message.liveries.length))
                                message.liveries = [];
                            message.liveries.push($root.LiveryObject.Livery.decode(reader, reader.uint32()));
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
            return Aircraft;
        })();
    })();
});
