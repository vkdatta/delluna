export const name="connect_without_contact";
export const id="dl_30e79049e010af41b5db";
export const url=new URL("../icons/connect_without_contact.svg?v=5705537cc124ec7ae02cb9a3410c406344af7560aecd820c48a1f82363e08546",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
