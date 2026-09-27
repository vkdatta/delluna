export const name="mouse-scroll";
export const id="dl_03c327b6fb724562bd21";
export const url=new URL("../icons/mouse-scroll.svg?v=c4b47a55a9213837dc6e0a0588f6d6c42cb026e2142d675b4c7e70b843a3196a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
