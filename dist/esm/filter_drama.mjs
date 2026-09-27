export const name="filter_drama";
export const id="dl_e82707853da61ac3d2d9";
export const url=new URL("../icons/filter_drama.svg?v=3d663eb3bee554838c3683ddf9bcdb91fc414cb15486502c6ad9abb6aa1662bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
