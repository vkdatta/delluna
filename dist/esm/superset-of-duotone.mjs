export const name="superset-of-duotone";
export const id="dl_b0775839d9200f54d9c7";
export const url=new URL("../icons/superset-of-duotone.svg?v=08e954d76e01ca25e9d84e9ef96b6631ebfd8e7c6c3401cc19d1fcaca1cad7f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
