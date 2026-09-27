export const name="text-align-end";
export const id="dl_5cb2c064350d46778fb6";
export const url=new URL("../icons/text-align-end.svg?v=ace4ba4a0af7ac55a744e86d9960f853d557a686b0475cad33a9c668e0d2c8e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
