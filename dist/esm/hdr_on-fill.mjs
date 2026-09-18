export const name="hdr_on-fill";
export const id="dl_e8efa1a76456421ea2ed";
export const url=new URL("../icons/hdr_on-fill.svg?v=e79c58d6801667ed3eb7023ffee406cf616a3588a574b038cd1e3ab7d8992082",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
