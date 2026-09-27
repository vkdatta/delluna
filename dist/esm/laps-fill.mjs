export const name="laps-fill";
export const id="dl_92703b4bc6fdc468ca71";
export const url=new URL("../icons/laps-fill.svg?v=ef549defe79e08ce74cae8da4f7ca7080bb6bf7ce3ed9eb7020da8653da0bc9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
