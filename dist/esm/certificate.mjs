export const name="certificate";
export const id="dl_eb961a9dfa1b4ff09e17";
export const url=new URL("../icons/certificate.svg?v=e480c505cee2492046a8981575f96f0dcb3f02b4aa7b3407b3ff84628d94848d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
