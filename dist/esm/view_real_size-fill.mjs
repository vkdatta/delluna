export const name="view_real_size-fill";
export const id="dl_24f322567c1b47e453ec";
export const url=new URL("../icons/view_real_size-fill.svg?v=655f04f4e19fa823667841a97ceb749d2dc3b7cbef02fcf9eb4eef48e41634b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
