export const name="mobile_code-fill";
export const id="dl_b6ea9b31285db68c4d3b";
export const url=new URL("../icons/mobile_code-fill.svg?v=3e518a07f38587cc1481c8e0cbc43b96661596c9045e4945cc95159140d75edb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
