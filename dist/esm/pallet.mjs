export const name="pallet";
export const id="dl_e7ebb6c869835e6f3a60";
export const url=new URL("../icons/pallet.svg?v=aae08006740e29bb79452ad545d38c0b239626a6199cff334e996d2effd0832b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
