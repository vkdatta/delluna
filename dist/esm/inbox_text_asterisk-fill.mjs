export const name="inbox_text_asterisk-fill";
export const id="dl_8b570c62f148c4adc10e";
export const url=new URL("../icons/inbox_text_asterisk-fill.svg?v=fa603459b654f40f16d8e3da20bda83b798ce88fe525ad1d0ae8ae3c98e93eff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
