export const name="counter_1";
export const id="dl_d597e5553c224801a304";
export const url=new URL("../icons/C/counter_1.svg?v=9d7015959ac5b1caa7f19e767a2189bf81e40be7fe71676b1b13e8e26a6b37fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
