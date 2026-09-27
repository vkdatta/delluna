export const name="double_chevron_up_filled";
export const id="dl_87f2ee9663a8321b0139";
export const url=new URL("../icons/double_chevron_up_filled.svg?v=53bf6f8a7db0a86da490eae455753c0d01dd4275f5ffff47b838e00f6d079bc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
