export const name="dine_lamp";
export const id="dl_b885dec51bbd86d4c604";
export const url=new URL("../icons/dine_lamp.svg?v=ff5ee0438776737a652d13200b4a8773d429ecff692c4c0e423b25f2c54bf365",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
