export const name="local_pizza";
export const id="dl_80036ef1edcbe99911e3";
export const url=new URL("../icons/local_pizza.svg?v=fd44083d46944a03c2882e4007f5f1be8b8704a92ce328f6b377baee78ffcd4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
