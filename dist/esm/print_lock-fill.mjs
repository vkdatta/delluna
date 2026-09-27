export const name="print_lock-fill";
export const id="dl_dc54829321d62730dbf0";
export const url=new URL("../icons/print_lock-fill.svg?v=2595b3445e7d71f4953ca5c88dccee753dcab039a4c0f754b18d0316b16131e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
