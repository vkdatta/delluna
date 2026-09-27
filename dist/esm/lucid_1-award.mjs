export const name="lucid_1-award";
export const id="dl_92c839234acb41e796c2";
export const url=new URL("../icons/lucid_1-award.svg?v=ed4850d6fe9f0b5713987ddbb07fd7f7f0c6b7104ae808642106e207821e458e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
