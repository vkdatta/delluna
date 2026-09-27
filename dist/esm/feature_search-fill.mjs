export const name="feature_search-fill";
export const id="dl_87dc6d4bdc52d1a4c04f";
export const url=new URL("../icons/feature_search-fill.svg?v=0ebd44dcfadc8fb0e7b464c8dc46b1456c6d2bc54fc4e4d56bff4d2ac58d6ba9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
