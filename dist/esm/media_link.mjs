export const name="media_link";
export const id="dl_0b2032911021bb6b0830";
export const url=new URL("../icons/media_link.svg?v=ad16c773f6c012b50a5936269806c039d53515a562b0fd9ea620f5a020b594e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
