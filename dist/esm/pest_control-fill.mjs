export const name="pest_control-fill";
export const id="dl_b2a2a46601cf45fda9ad";
export const url=new URL("../icons/pest_control-fill.svg?v=c4c79dcba8bfd5a5eabdae5af85498658d8cf3ec3ab7431b68f50b6dcffc8e0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
