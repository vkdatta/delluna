export const name="phone_callback-fill";
export const id="dl_bc9ac77f6f6986a00d2a";
export const url=new URL("../icons/phone_callback-fill.svg?v=42df1b947104ccf1b00db8e39522403c599a038b409366b27b99237c772853bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
