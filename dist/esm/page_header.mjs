export const name="page_header";
export const id="dl_4a0e07a0c9ae9f8ed1bb";
export const url=new URL("../icons/page_header.svg?v=d119994af6db5c478ed86fd37edf71af514eee25767ea2cb19284cb109244c8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
