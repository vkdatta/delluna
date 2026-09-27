export const name="new_label-fill";
export const id="dl_899114b0c1a7f10edb38";
export const url=new URL("../icons/new_label-fill.svg?v=dad0d7abe4ff6743c85b93660f3d6dd9a593e76304af43a85b24ff2160f95a65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
