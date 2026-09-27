export const name="web_asset-fill";
export const id="dl_c1b06ac6863ce78aea31";
export const url=new URL("../icons/web_asset-fill.svg?v=1f33b9d3632c2685f0e2202c081b075a683c7fc514cb2a38d015b3e31676babf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
