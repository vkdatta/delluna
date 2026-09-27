export const name="table_rows-fill";
export const id="dl_a15bb04c3895cbefdf58";
export const url=new URL("../icons/table_rows-fill.svg?v=0bcff84aa4612496afa8005a67b080b0e3e3d0a7091cf0511fa7d282247e5397",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
