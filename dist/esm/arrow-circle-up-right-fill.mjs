export const name="arrow-circle-up-right-fill";
export const id="dl_1e8236e525d64cc28ac1";
export const url=new URL("../icons/arrow-circle-up-right-fill.svg?v=be5d7191e5c4dde8762c280ec138c75e9f865a937428bfeb89bee2eace55cbf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
