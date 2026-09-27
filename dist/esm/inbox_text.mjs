export const name="inbox_text";
export const id="dl_dc968206972e275d575f";
export const url=new URL("../icons/inbox_text.svg?v=79f7312acadb9c4846ed27c58bff5b2915e3b32681271244c2c00382792c13ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
