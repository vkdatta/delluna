export const name="orders";
export const id="dl_f56f5e050180268c8730";
export const url=new URL("../icons/orders.svg?v=b959a2f2bb1dc048a9cdd47ab7b0acf37db6f1e1367f3062d7aa70330b3b3ab2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
