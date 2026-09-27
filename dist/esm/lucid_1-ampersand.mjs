export const name="lucid_1-ampersand";
export const id="dl_b34bb932bf5e428f99b9";
export const url=new URL("../icons/lucid_1-ampersand.svg?v=640ef29d94666eb1bf62935b3ed8838d784406b94672c176526aef021a3f2fb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
