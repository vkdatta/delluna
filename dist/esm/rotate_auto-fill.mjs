export const name="rotate_auto-fill";
export const id="dl_7c271365dd8f3346d2de";
export const url=new URL("../icons/rotate_auto-fill.svg?v=f44eda019373a6baa59103b87f05ea00c432107e23a7dc4f6acb741cd42d5620",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
