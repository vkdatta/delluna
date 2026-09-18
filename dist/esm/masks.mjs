export const name="masks";
export const id="dl_84d1c42f243d4b038aeb";
export const url=new URL("../icons/M/masks.svg?v=7ca05266304129cc2edf2ce093006b8829c4f0b55d654ac0fb05843054c6f98b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
