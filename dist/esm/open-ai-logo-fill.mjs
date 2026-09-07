export const name="open-ai-logo-fill";
export const id="dl_cebdb1e2615442d89ecb";
export const url=new URL("../icons/open-ai-logo-fill.svg?v=ef36b8b663be27f4021701ff58f5c756e0db4ab9c4c7febcc5e487f3b3c5b313",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
