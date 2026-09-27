export const name="spo2";
export const id="dl_818f2252782a1d7c6d53";
export const url=new URL("../icons/spo2.svg?v=3f9f094987e3856dcd713f896e8cfce6a9890b7bf1bcc6abb2a1c31b881852da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
