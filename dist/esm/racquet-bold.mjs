export const name="racquet-bold";
export const id="dl_e2598e36a5ee483c9053";
export const url=new URL("../icons/racquet-bold.svg?v=8a1894de7551d011f21fe8ce7ffff1c2069e4ed9f5a9dc26b96bc5e728565c03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
