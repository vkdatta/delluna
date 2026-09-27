export const name="lucid_2-file-heart";
export const id="dl_cf9fca5bcbed4b85a798";
export const url=new URL("../icons/lucid_2-file-heart.svg?v=c5cf7d27871108047d10340f629e6310fd406e385d349ba2c497dcd74fea236b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
