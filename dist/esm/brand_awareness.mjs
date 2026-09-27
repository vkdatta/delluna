export const name="brand_awareness";
export const id="dl_fe5c23a40a5c9d7d401c";
export const url=new URL("../icons/brand_awareness.svg?v=d531fc5a4c2b810d4527f7a3cc4f9ab848b6ed42a571ca3c5afb9a031424f85a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
