export const name="page_control-fill";
export const id="dl_c8c02edd653648b7aaf9";
export const url=new URL("../icons/page_control-fill.svg?v=e728dc206b9bb5e8bc4d160fe6ff499f9a7409e5592d623fede4ef4c371a7a8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
