export const name="dashboard_2";
export const id="dl_2f59f011f77e8f54bca4";
export const url=new URL("../icons/dashboard_2.svg?v=b36fa5688e93192ebe24a01984a3ed7886ce425c713d9943b4b33fce0823aac4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
