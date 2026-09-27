export const name="outlet-fill";
export const id="dl_73983a78275ccffe9df0";
export const url=new URL("../icons/outlet-fill.svg?v=21822344991595861e059832f9a8448f4b0f857723964448a7b267818d23e9fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
