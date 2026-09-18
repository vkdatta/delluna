export const name="grid_3x3_off-fill";
export const id="dl_602dbf0580624c76b36c";
export const url=new URL("../icons/G/grid_3x3_off-fill.svg?v=bff8323c68984783cfd660564c02bc6601556ee7c3d15cec5505f39ebdb13d7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
