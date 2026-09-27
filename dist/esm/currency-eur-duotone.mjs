export const name="currency-eur-duotone";
export const id="dl_23bf7e1e00ef4f93a555";
export const url=new URL("../icons/currency-eur-duotone.svg?v=bc4ea1186525cde7e8e1b5c57a5c3e5411b1f7a4ec3ee20ced62afe4fd02a26f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
