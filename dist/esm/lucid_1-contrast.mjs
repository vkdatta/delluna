export const name="lucid_1-contrast";
export const id="dl_de8dd6d6492c4e19acfc";
export const url=new URL("../icons/lucid_1-contrast.svg?v=9365555a9e037041a9c63fb5935f050add22c40e30b567846f59899542431c9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
