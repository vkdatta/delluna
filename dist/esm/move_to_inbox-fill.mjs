export const name="move_to_inbox-fill";
export const id="dl_285fcfc429eda2cf4b72";
export const url=new URL("../icons/move_to_inbox-fill.svg?v=1bca03f76bdca91bc912ccbfa5c5d4d81afa8fb8d0126e0ad7adf86e1b7911a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
