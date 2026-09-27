export const name="unpublished";
export const id="dl_75f4165d316e5bfa005c";
export const url=new URL("../icons/unpublished.svg?v=c35a346dd5f7ddb741aadb249847daabcd84d83197033b1e916ffbf598800ebf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
