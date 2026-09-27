export const name="php-fill";
export const id="dl_5e2b6508ff80768db4e2";
export const url=new URL("../icons/php-fill.svg?v=376692882802d7b8bd03bf0503d3e4ba9d9e668fe6c03153fcd3d295d3d5c59c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
