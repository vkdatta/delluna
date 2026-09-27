export const name="lock-laminated-open-duotone";
export const id="dl_b66fc4d137554622a098";
export const url=new URL("../icons/lock-laminated-open-duotone.svg?v=9d793fb2efbc56e4df845a9b49475ea579ae48a73348c0d86548c76474c471dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
