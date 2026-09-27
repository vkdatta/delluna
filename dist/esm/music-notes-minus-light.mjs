export const name="music-notes-minus-light";
export const id="dl_55bde10137b24b3ea01f";
export const url=new URL("../icons/music-notes-minus-light.svg?v=d9823a0229e8cb9aa233159f42452e8db68630ec7bbf459d64b459f9d92a3fff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
