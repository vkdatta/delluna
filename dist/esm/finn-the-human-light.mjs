export const name="finn-the-human-light";
export const id="dl_0b8a01942fa04aea8971";
export const url=new URL("../icons/finn-the-human-light.svg?v=1816150c52c9ab9f8ab96a3f7319bc1457adffc43514c1dae961cbe5f47e0414",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
