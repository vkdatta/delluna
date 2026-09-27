export const name="calculator-light";
export const id="dl_f85ec27f37d04c3192f8";
export const url=new URL("../icons/calculator-light.svg?v=3431b7db54acdac92a3cf594e9440264da8728472256bd550a297b9a773e4680",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
