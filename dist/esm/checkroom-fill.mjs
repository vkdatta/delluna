export const name="checkroom-fill";
export const id="dl_e51f8de6a51e05b79b89";
export const url=new URL("../icons/checkroom-fill.svg?v=59d71f28f849593a38f2807406711278571f6eee50275636b2f4d454889af416",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
