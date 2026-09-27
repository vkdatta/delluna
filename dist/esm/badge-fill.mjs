export const name="badge-fill";
export const id="dl_de52bf9fa8cd3326bc60";
export const url=new URL("../icons/badge-fill.svg?v=b5e30fb6d18db49fdbdeb42d6438e09a697d7b7514b794cd98980312a48399ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
