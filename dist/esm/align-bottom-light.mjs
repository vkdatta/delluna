export const name="align-bottom-light";
export const id="dl_cdca4a33522041d486cf";
export const url=new URL("../icons/align-bottom-light.svg?v=ce949eafcdff70d57b5e7ada08befebfeeed140ed9ba1a5163d639f746cf4fb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
