export const name="nest_clock_farsight_analog-fill";
export const id="dl_b65f50557d511db3b9ac";
export const url=new URL("../icons/nest_clock_farsight_analog-fill.svg?v=703e1f95956298f9f767598d7cc6cfbb2862a0b656868fd8efbf9f5efa9dbd30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
