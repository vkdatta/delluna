export const name="lucid_1-book-headphones";
export const id="dl_adb4c448163e414d98b1";
export const url=new URL("../icons/lucid_1-book-headphones.svg?v=387ca37428e89befb06baee99a3ebcd261c4d28e4bdf38d1f00bc22d639039c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
