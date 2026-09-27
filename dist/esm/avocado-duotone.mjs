export const name="avocado-duotone";
export const id="dl_531199348831400e9c22";
export const url=new URL("../icons/avocado-duotone.svg?v=85baacc254475eb1fa6c5fef0b75d053c9775bc291a755a5824a8bd250d7e4f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
