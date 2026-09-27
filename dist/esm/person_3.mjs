export const name="person_3";
export const id="dl_391e0ce37cf22cd9d5c3";
export const url=new URL("../icons/person_3.svg?v=8358820fa5bb546454c8660bb82359860250e6a7d80ea68b97f56274a68438a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
