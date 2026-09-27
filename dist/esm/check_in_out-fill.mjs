export const name="check_in_out-fill";
export const id="dl_daf0791c1dc9076a0d65";
export const url=new URL("../icons/check_in_out-fill.svg?v=b2624e7773730fd1742e2bf36cd097f66b9ad57fda131ed3a0cdc667599daeff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
