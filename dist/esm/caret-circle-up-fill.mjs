export const name="caret-circle-up-fill";
export const id="dl_5d7210383d684d049ec4";
export const url=new URL("../icons/caret-circle-up-fill.svg?v=11ee4ae7b80c7fe24a65f230b728c5e3b3ee1861b05f1a163e1ee5bf2ee8d7ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
