export const name="okonomiyaki";
export const id="dl_192650848176c2f45fa5";
export const url=new URL("../icons/okonomiyaki.svg?v=e0ef402ab03d85a947383c0544bd23cf609317edd6838cbe9f9047ff67ff7ceb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
