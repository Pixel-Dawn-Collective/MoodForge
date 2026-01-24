const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  const { resolver } = config;

  return {
    transformer: {
      ...config.transformer,
      babelTransformerPath:
        require.resolve("react-native-svg-transformer/expo"),
    },
    resolver: {
      ...resolver,
      assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...resolver.sourceExts, "svg"],
    },
  };
})();
