export const name="cpu-light";
export const id="dl_f27460f6a5124c8bb221";
export const url=new URL("../icons/cpu-light.svg?v=6983c9ef7c3a2e6a78d15e3c6ffebc101770261e2d4776e43471a02f744495a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
