export const name="lucid_3-square-arrow-up";
export const id="dl_12855b01c5fc4af08446";
export const url=new URL("../icons/lucid_3-square-arrow-up.svg?v=12c5ec5e547fe76136ae118e712015dab20ef814a1be31f0e436418aabf544cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
