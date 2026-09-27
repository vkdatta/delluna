export const name="toast-fill";
export const id="dl_c9780ed2269fdeab05d6";
export const url=new URL("../icons/toast-fill.svg?v=a01d82138d57028209ae313eb824f53973268a4346a1b10a94b3d9548b0b68c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
