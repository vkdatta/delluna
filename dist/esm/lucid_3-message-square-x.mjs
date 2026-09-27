export const name="lucid_3-message-square-x";
export const id="dl_71493871eca447848666";
export const url=new URL("../icons/lucid_3-message-square-x.svg?v=5f5c023c595b6591a84069d95a1c8f219482fe89bb38a410450ae1207faeaef7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
