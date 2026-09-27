export const name="thermometer-cold-fill";
export const id="dl_48620fe8d4590dd84dcf";
export const url=new URL("../icons/thermometer-cold-fill.svg?v=04b872137a76141f9266b1b47c186fc63211912d03948353dcd8025c07ce1a63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
