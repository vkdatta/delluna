export const name="stylus_pencil-fill";
export const id="dl_5a73f4793f0c2fd4334c";
export const url=new URL("../icons/stylus_pencil-fill.svg?v=a61559a67615ea1cf70e1265b01a1dfbe2f7666858de35345ee50913a4fad2d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
