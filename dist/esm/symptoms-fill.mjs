export const name="symptoms-fill";
export const id="dl_b20d3a2853e5deaa8f4e";
export const url=new URL("../icons/symptoms-fill.svg?v=72856152e8f584ea32224f04780faa5cb818e0febb1026fa18530c6ffd88f607",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
