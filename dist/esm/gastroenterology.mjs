export const name="gastroenterology";
export const id="dl_31792e7aedb5f6066bb6";
export const url=new URL("../icons/gastroenterology.svg?v=b782db7616467b8ec0b2e8c8de45a2fc60a59e47429764c80e2d8d50cf324441",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
