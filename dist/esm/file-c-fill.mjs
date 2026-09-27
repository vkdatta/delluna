export const name="file-c-fill";
export const id="dl_eb48489a82c041c38fce";
export const url=new URL("../icons/file-c-fill.svg?v=6eeda99186759e6a432aa95243591dbb72b21dda94bfa08401be2bd4fa7d1acf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
