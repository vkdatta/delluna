export const name="intersection";
export const id="dl_93cf2756fdef4078a944";
export const url=new URL("../icons/intersection.svg?v=9c3b5c153196e78f6a9f01e1fc14e792bf09c9832879e489c75d8d0a6af1e08b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
