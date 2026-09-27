export const name="vinyl-record-duotone";
export const id="dl_8948f93981bda3415c72";
export const url=new URL("../icons/vinyl-record-duotone.svg?v=91d54b8e1c78a8103ae2ad081c50afa52cdf94977055cf6e782b5fe20741198c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
