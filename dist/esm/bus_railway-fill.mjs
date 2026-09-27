export const name="bus_railway-fill";
export const id="dl_edcfb483f0204aa3956e";
export const url=new URL("../icons/bus_railway-fill.svg?v=315b3dcc583f88b658bdb35b3ce5724c0f7674f880a2139a46ea0093b2fcb52c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
