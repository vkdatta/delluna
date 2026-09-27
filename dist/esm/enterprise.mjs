export const name="enterprise";
export const id="dl_e2f31c2f9ca1fcc9dedc";
export const url=new URL("../icons/enterprise.svg?v=6b83d69dd3c2cec52dfb10f259b81c704658c610d85451a2dfbdf2d8664f1fe8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
