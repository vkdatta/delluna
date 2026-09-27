export const name="lucid_3-mouse-pointer-ban";
export const id="dl_10c6648671134cf0aab4";
export const url=new URL("../icons/lucid_3-mouse-pointer-ban.svg?v=4763239cc89472f56b9cc43f651af3f034c98ce61bbafd907f2f42340e567704",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
