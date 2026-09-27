export const name="view_day";
export const id="dl_baa56ae7da12517e9f0b";
export const url=new URL("../icons/view_day.svg?v=1767e0ccd5847c35c53c10b30fec898753eaeeb0c2b0614bda32a3fc1c641681",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
