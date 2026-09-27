export const name="gif_box";
export const id="dl_f552c6a42ab3a163dabc";
export const url=new URL("../icons/gif_box.svg?v=e7dbd1aeb6eaa308be42b7c398ca692eb8d595aff4771d985e4069740dfb215b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
