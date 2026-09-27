export const name="luggage-fill";
export const id="dl_f2a22b57b93dd4d47c1c";
export const url=new URL("../icons/luggage-fill.svg?v=9b6afa441ca375df7a7b1cb98a5fba4dc342c7fe27ea747a4a4bca5b886c24c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
