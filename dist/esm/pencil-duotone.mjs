export const name="pencil-duotone";
export const id="dl_980d334e7f1649669721";
export const url=new URL("../icons/pencil-duotone.svg?v=3887693d70107ac1b4f11f5a5f071c89293b2c3f997d3c63565d971fec5c213c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
