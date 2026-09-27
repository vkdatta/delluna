export const name="arrow_up";
export const id="dl_b9a7c2cfe01f351c3691";
export const url=new URL("../icons/arrow_up.svg?v=91c505547d1bb95b2c10a375418d96467057807d5f79efc9430d67224c769223",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
