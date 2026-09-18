export const name="vape_free-fill";
export const id="dl_42c28e8418624e5eae38";
export const url=new URL("../icons/V/vape_free-fill.svg?v=3b3122b5fcd8c975cc9580620d229a9fd54b36d6c209de09fea094c9d77d8323",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
