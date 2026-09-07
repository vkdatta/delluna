export const name="thermometer-cold-fill";
export const id="dl_c9f16d461394437680e3";
export const url=new URL("../icons/T/thermometer-cold-fill.svg?v=04b872137a76141f9266b1b47c186fc63211912d03948353dcd8025c07ce1a63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
