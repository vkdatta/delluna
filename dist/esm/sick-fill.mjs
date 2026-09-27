export const name="sick-fill";
export const id="dl_ea7bb23c269c55438d55";
export const url=new URL("../icons/sick-fill.svg?v=74aadb85eedfd0ee18d2a0927b6c25a56560b97eb885551424ad7cb6feee6e3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
