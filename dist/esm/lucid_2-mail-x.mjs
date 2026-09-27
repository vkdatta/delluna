export const name="lucid_2-mail-x";
export const id="dl_cf1e9b2104c242bd99ec";
export const url=new URL("../icons/lucid_2-mail-x.svg?v=6af56bbbe8b5e0682cb8da1ebe1ad73d3d085e63daddf8b97a508cd745077716",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
