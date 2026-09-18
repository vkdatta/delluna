export const name="filter_none";
export const id="dl_8c6ae1cef5ec420f9691";
export const url=new URL("../icons/filter_none.svg?v=2d2395a44ed2d049855464b220c0f66648be24ce3d18c20df903264152ad546b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
