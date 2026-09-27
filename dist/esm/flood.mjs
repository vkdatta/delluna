export const name="flood";
export const id="dl_1e75c5b3ea4f2e242946";
export const url=new URL("../icons/flood.svg?v=7df1ddcb525e489830383f288792093d14bebbf327647e592a6c100b0f3680c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
