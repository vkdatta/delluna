export const name="edit_off-fill";
export const id="dl_5a4f6cb86825f90b2c06";
export const url=new URL("../icons/edit_off-fill.svg?v=01277457ab1115945ce903194babdd626825a71be124269df6c64bdf96ecdef6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
