export const name="arrow-line-up-right-fill";
export const id="dl_5dea0e8a7f0c471cbb75";
export const url=new URL("../icons/arrow-line-up-right-fill.svg?v=b900612c17064a4ed4e8327d5b9d0982ef3a939dff45981a849752a3d1382ed6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
