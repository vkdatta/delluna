export const name="prohibit-light";
export const id="dl_62c08d5dcead4e58a465";
export const url=new URL("../icons/prohibit-light.svg?v=9dd8f81d1165b5bff5558891027b3b303e49aed90607a7d14199e67aeb8060e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
