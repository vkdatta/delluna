export const name="crosshair-light";
export const id="dl_6e32d35d5efb4d1f972a";
export const url=new URL("../icons/crosshair-light.svg?v=8d1616100d82e5cc48a60e3e773a10f1ffbd339750620fd2e8351a7f8d11cb05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
