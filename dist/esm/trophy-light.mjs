export const name="trophy-light";
export const id="dl_c7ee095f71d7e250c6cd";
export const url=new URL("../icons/trophy-light.svg?v=c72ddeb521f26df60e6ceecc0f5081417afbb7d4565eee2c04c468b7e9dd1485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
