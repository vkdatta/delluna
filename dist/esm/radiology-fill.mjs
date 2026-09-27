export const name="radiology-fill";
export const id="dl_57d6b0f7ad5dc6d64867";
export const url=new URL("../icons/radiology-fill.svg?v=fe7001ae50a47b2bce515fa8cff53772e1ca206280da134b4a5c56b21930351a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
