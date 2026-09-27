export const name="attribution";
export const id="dl_28e375d803c5f087e5f5";
export const url=new URL("../icons/attribution.svg?v=3898f35596419d35c2863f271ebeafc1844b6d7a44def4fd8b94ac61de2176f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
