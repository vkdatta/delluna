export const name="filter_3";
export const id="dl_773aa1cc82ab45bfe810";
export const url=new URL("../icons/filter_3.svg?v=d87ec7cf3f76294f17d36334845cf8b40b3c437080cf6b55083cef468e7c109f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
