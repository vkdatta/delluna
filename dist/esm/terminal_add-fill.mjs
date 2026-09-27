export const name="terminal_add-fill";
export const id="dl_a71d3997aa8780bd0b3d";
export const url=new URL("../icons/terminal_add-fill.svg?v=9ed63f3e2bab5fc7d95920d14fffbc5a6335f26b3481e0520426bd7b1ccd2cfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
