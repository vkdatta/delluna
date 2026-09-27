export const name="energy";
export const id="dl_7d5ad7635ee68544cbf2";
export const url=new URL("../icons/energy.svg?v=b73ed4fef218b55d4f9122a4a6d48304967e224a26594d6a37672b0d9bd2c6cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
