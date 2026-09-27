export const name="linktree-logo-duotone";
export const id="dl_5d59b1c36d2b477fa09d";
export const url=new URL("../icons/linktree-logo-duotone.svg?v=449f87b0d8c347c67fe7c0f8418c1ef41164732735aec7340a83f6e45b6e0b58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
