export const name="wind-light";
export const id="dl_a2763f15636e63460d3c";
export const url=new URL("../icons/wind-light.svg?v=d840ad1eb67776140bb1f8ebdbcb97d9895d22e7b5cf1d072ed6f233aecc29b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
