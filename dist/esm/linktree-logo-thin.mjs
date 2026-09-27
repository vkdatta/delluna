export const name="linktree-logo-thin";
export const id="dl_9744cd4f863243a29841";
export const url=new URL("../icons/linktree-logo-thin.svg?v=d5f3b5033b2d7859fd5283ead7cdbe82ef2c52563c017d8425272dc9a395a453",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
