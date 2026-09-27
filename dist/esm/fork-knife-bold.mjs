export const name="fork-knife-bold";
export const id="dl_4a98f5941e5548748a50";
export const url=new URL("../icons/fork-knife-bold.svg?v=b3b445de579488be48d194c36b88d45973cb3ceb8158a6bd70345d81fd7e09ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
