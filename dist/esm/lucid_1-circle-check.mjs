export const name="lucid_1-circle-check";
export const id="dl_2b215fc0f3404fa09fd5";
export const url=new URL("../icons/lucid_1-circle-check.svg?v=589ca8e6600b86907b49baa34820e3b00d161cf18ea5cc371337e86dcf06d685",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
