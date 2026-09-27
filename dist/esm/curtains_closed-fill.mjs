export const name="curtains_closed-fill";
export const id="dl_62857eef76b908dff72c";
export const url=new URL("../icons/curtains_closed-fill.svg?v=bd6fe6376ef41656246dddb474c5bed36ab5a996563f1969878528dbd9f7faa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
