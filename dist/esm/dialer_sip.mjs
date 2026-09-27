export const name="dialer_sip";
export const id="dl_0d9ce277df00b65eac11";
export const url=new URL("../icons/dialer_sip.svg?v=08dd925b601b7ef02933ba6a5c48ae882544053e6edd0a1ac947d0289d995d05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
