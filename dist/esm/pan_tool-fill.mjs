export const name="pan_tool-fill";
export const id="dl_3ca6079a24c03061665d";
export const url=new URL("../icons/pan_tool-fill.svg?v=d1e0725810b573d16bf49ffdd18a5b740b85bf049f506da20d3a79ee94c15593",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
