export const name="folder-star";
export const id="dl_cdbaf09af6444eb09bdc";
export const url=new URL("../icons/folder-star.svg?v=91aa8fe298272b8237b2e64a5d3505289af15fb28b934dc0f48eb33e78b15fe7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
