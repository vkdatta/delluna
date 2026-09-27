export const name="forklift";
export const id="dl_6f960a632104d68441fa";
export const url=new URL("../icons/forklift.svg?v=c10dbaf0419ee8c59597c11fc3aacfb6cf23f60d56e33e91d552d7f5ad39ee7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
