export const name="lucid_1-book-headphones";
export const id="dl_adb4c448163e414d98b1";
export const url=new URL("../icons/lucid_1-book-headphones.svg?v=6f9e68ae41ef67f197a34198200a50a04d520509fa76ef192674918395fe81c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
