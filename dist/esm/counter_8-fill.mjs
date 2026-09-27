export const name="counter_8-fill";
export const id="dl_e0795162c591bcdd50ad";
export const url=new URL("../icons/counter_8-fill.svg?v=6531bbc9e1c4986d7aec6940e97d93649262805a0e9fd4b1fe860ea6251dc79b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
