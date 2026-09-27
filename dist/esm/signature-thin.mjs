export const name="signature-thin";
export const id="dl_2137fc2dc62a4381733f";
export const url=new URL("../icons/signature-thin.svg?v=9ae5b03e7efc9331ed0d9a5f4344e343d19b86ebc555923b11acd1e3f9df724d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
