export const name="heart-break-duotone";
export const id="dl_74772ac99d8f49599564";
export const url=new URL("../icons/heart-break-duotone.svg?v=33d20039386a7c6c5b3a05a1010b93f08da741ce2422e60b19553e25494e5cce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
