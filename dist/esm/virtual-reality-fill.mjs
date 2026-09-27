export const name="virtual-reality-fill";
export const id="dl_c5c99feaf26bdbfe7c77";
export const url=new URL("../icons/virtual-reality-fill.svg?v=4813ffba3bd44cec2200d42257f99de2bf5e20dabd1c020de699fdf078793d93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
