export const name="no_photography-fill";
export const id="dl_0b5bc9e1c013a4edce9e";
export const url=new URL("../icons/no_photography-fill.svg?v=fba998b4de7e7e594b9abc0b0f39f45b09020befbc88f3f1e1dcafd4257ca345",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
