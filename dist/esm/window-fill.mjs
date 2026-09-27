export const name="window-fill";
export const id="dl_75466c40a844b64e8f9b";
export const url=new URL("../icons/window-fill.svg?v=b5efb029f598d783e9e8f31c0facd5efa3c111a2f40cf0c05409144006662075",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
