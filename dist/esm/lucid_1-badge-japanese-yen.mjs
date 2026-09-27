export const name="lucid_1-badge-japanese-yen";
export const id="dl_91276232931448d893c2";
export const url=new URL("../icons/lucid_1-badge-japanese-yen.svg?v=a09ed74399b665003097b5280b3260f891c0550b4c90b9badd93089892497a0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
