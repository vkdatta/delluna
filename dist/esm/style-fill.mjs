export const name="style-fill";
export const id="dl_c640659c176b49c5aa95";
export const url=new URL("../icons/style-fill.svg?v=dac036d7ffae13cd69800893c27261cbefcd082643f94cbcdc16c268c9cfc3f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
