export const name="vertical_shades-fill";
export const id="dl_f4f22278f250454ce170";
export const url=new URL("../icons/vertical_shades-fill.svg?v=d7eb623668661b665473272d610109bd4f4878bfdb5adbf2bbc961192c7d1dc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
