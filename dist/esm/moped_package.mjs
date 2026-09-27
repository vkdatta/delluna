export const name="moped_package";
export const id="dl_7ce3a7774dc25e2616db";
export const url=new URL("../icons/moped_package.svg?v=f45c684691e173fd9b39b3f7b40041f2395ac341cfc9e11735e371ef6faea62c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
