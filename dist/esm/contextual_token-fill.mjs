export const name="contextual_token-fill";
export const id="dl_3223bd67c01a4408f02b";
export const url=new URL("../icons/contextual_token-fill.svg?v=451f103e415f46e0b4419906622250e397f92b2eae7cd2f4e9859b37cbc34f97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
