export const name="cards";
export const id="dl_e377d5c2e033416285e0";
export const url=new URL("../icons/cards.svg?v=59006e04d48615e5f223226d941ddca8b0b5e0f5a3ae3058bbe23cf63ce29a7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
