export const name="broadcast-fill";
export const id="dl_8cd0d562313647cda48d";
export const url=new URL("../icons/broadcast-fill.svg?v=8d7a60128c2d3c68fff1e7f357cb71aaa41cf58d5cb526b8fe03f93049d70dca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
