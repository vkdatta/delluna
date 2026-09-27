export const name="double_chevron_up_filled";
export const id="dl_c33cd571d3d9aeb91d42";
export const url=new URL("../icons/double_chevron_up_filled.svg?v=e3c90aaca11f5e7326a9542e46e3e8a61c2da2a873be4ecd8c15a1ec65545e4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
