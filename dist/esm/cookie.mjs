export const name="cookie";
export const id="dl_de2081db890c0c05a0f1";
export const url=new URL("../icons/cookie.svg?v=eac49ff1d40640a9a26b94333156fecea2d614761a0dcf96baa9b83d63b5edbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
