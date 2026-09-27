export const name="elevation-fill";
export const id="dl_0b2c3ef5966b0180711f";
export const url=new URL("../icons/elevation-fill.svg?v=197596772f9f14cb771a2a3e2175d3fb7b20e99c64eab1afee53b9ba9f5c8f83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
