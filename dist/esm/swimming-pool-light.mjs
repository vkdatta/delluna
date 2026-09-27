export const name="swimming-pool-light";
export const id="dl_5dbe6b16fca11ae2e862";
export const url=new URL("../icons/swimming-pool-light.svg?v=616a48aa6d972479886bf6c53dc4b2e08ed23c20a7bab7bef5cf912af077cac0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
