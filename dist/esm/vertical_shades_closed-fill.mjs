export const name="vertical_shades_closed-fill";
export const id="dl_1d8f9488a681460c84f5";
export const url=new URL("../icons/vertical_shades_closed-fill.svg?v=e0c6f45f0ed0ffadfec49201b442ec610d8e7bc6fc797ee9ba171555816531ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
