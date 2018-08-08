import replace from 'rollup-plugin-replace';
import {plugins as basePlugins} from '../build/rollup_plugins';

const plugins = () => basePlugins().concat(
    replace({
        'process.env.BENCHMARK_VERSION': JSON.stringify(process.env.BENCHMARK_VERSION),
        'process.env.MAPBOX_ACCESS_TOKEN': JSON.stringify(process.env.MAPBOX_ACCESS_TOKEN),
        'process.env.MapboxAccessToken': JSON.stringify(process.env.MapboxAccessToken),
        'process.env.MAPBOX_STYLE_URL': JSON.stringify(process.env.MAPBOX_STYLE_URL),
        'process.env.MapboxStyleURL': JSON.stringify(process.env.MapboxStyleURL),
        'process.env.STYLE_BENCHMARK': JSON.stringify(process.env.STYLE_BENCHMARK),
        // should we rewrite this as 'production' if BUILD==='production'?
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
);

const testFolder = process.env.STYLE_BENCH ? 'style-tests' : 'version-tests';

const config = [{
    input: `bench/${testFolder}/benchmarks_viewmodel.js`,
    output: {
        file: 'bench/benchmarks_view_generated.js',
        format: 'umd',
        sourcemap: 'inline'
    },
    plugins: plugins()
}];

export default config;
