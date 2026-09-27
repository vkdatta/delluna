export const name="lucid_1-brush-cleaning";
export const id="dl_43752169de534b008bab";
export const url=new URL("../icons/lucid_1-brush-cleaning.svg?v=d4380c36609a55de8bd6cd3d6b38540d32fe3e36be6f383b5973301506636a83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
