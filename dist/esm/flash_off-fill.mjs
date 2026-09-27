export const name="flash_off-fill";
export const id="dl_c36ff2642c2c74dccbb8";
export const url=new URL("../icons/flash_off-fill.svg?v=620dadf1e8b949837381e6c082da056401efacd60ee98476b6ece5e6bb04372d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
