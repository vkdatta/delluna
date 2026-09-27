export const name="lucid_3-pipette";
export const id="dl_16e9aa996e284e8a88c8";
export const url=new URL("../icons/lucid_3-pipette.svg?v=3052f4500821c110b40e040d32f2ea101cf0fa18e19db87772fdafa426f952ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
