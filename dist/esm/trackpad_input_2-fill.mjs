export const name="trackpad_input_2-fill";
export const id="dl_b8013806accc40609c95";
export const url=new URL("../icons/trackpad_input_2-fill.svg?v=942445ec4b4207b148774a55d7a3fa308808c1fbf3779687363917137fab7921",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
