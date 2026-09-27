export const name="megaphone-simple-fill";
export const id="dl_fd9e0ac082464f79b241";
export const url=new URL("../icons/megaphone-simple-fill.svg?v=7edb6bee84db34577c6b60acf20d9573e1f62b7a1b55810e09aabc3c5004cf82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
