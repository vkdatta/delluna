export const name="caret-up-duotone";
export const id="dl_9201fef2185d411887a0";
export const url=new URL("../icons/caret-up-duotone.svg?v=6039b621d7428447cbabfc9f92d47a896471e8ac975a2cf9e25459bb3e5efae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
