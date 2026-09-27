export const name="hockey-light";
export const id="dl_dae91a9031f24788a413";
export const url=new URL("../icons/hockey-light.svg?v=036dd12f73a0d52668fcf82b4adeddba24b1484ba3c79858c83d94ea9e985c23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
