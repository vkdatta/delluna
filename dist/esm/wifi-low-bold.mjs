export const name="wifi-low-bold";
export const id="dl_833f9000128a28d19a3c";
export const url=new URL("../icons/wifi-low-bold.svg?v=bdbba2a39cc954693cafdac1a9010798eb3040a5548da94f973be5656a31b2a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
