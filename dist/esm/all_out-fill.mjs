export const name="all_out-fill";
export const id="dl_93a7cb32fb084369b90f";
export const url=new URL("../icons/all_out-fill.svg?v=4e4ee0676beda422618605d5910d79876a42497a0a3556665690c4784b6b71c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
