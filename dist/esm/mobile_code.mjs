export const name="mobile_code";
export const id="dl_0ac6a5a29e77f72efbac";
export const url=new URL("../icons/mobile_code.svg?v=b8b803e151397e1895cd114d432996ba3c8ee10fe39b593221252326518f05a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
