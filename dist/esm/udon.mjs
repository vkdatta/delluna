export const name="udon";
export const id="dl_567ec1f983927b9352df";
export const url=new URL("../icons/udon.svg?v=d735f7aea6fa5efd145179a15024fbd5f5a24843d9045b7058e7cfd5032d23ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
