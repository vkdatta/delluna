export const name="charging-station-fill";
export const id="dl_131a921fe6274ef581b0";
export const url=new URL("../icons/charging-station-fill.svg?v=f2c7fe38e30dd0f8d708e3843df2d453d0b7321ef18c299ccb4d7d258517b31d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
