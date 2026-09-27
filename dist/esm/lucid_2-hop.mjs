export const name="lucid_2-hop";
export const id="dl_0cd3b26af4da4fb3a5bd";
export const url=new URL("../icons/lucid_2-hop.svg?v=793ba03619a96101583e4ed9b9fd72beebcf706955d497214aeb80ed56b3a6a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
