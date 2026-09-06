export const name="infinity-light";
export const id="dl_f9656623799f4a27a4b9";
export const url=new URL("../icons/infinity-light.svg?v=36d7373955efe4c6e49ae800a3795ada47d189910199ad11e0a435ae25754319",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
