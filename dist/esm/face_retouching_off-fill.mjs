export const name="face_retouching_off-fill";
export const id="dl_dcecf6dd56c174629987";
export const url=new URL("../icons/face_retouching_off-fill.svg?v=3bae2f26fa866cac8f17c6946047bc7b5b7a05a73628a73e2d1c9b3a8cf7a9fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
