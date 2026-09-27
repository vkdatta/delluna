export const name="lucid_3-message-square-share";
export const id="dl_bddfa3d0991041adba88";
export const url=new URL("../icons/lucid_3-message-square-share.svg?v=14af6de0bbb0d250b9473b3b1f48c19196d481f3757d5f3ba1f0ab894fc683a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
