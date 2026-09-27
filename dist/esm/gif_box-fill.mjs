export const name="gif_box-fill";
export const id="dl_e5e4edb3dc4856b7206c";
export const url=new URL("../icons/gif_box-fill.svg?v=e68aa49b5fcc246c22ed0358780a00f96a14b0839a6db8860f3f7983baf56449",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
