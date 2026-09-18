export const name="manage_search-fill";
export const id="dl_9cc2891a8fcb47a0af6d";
export const url=new URL("../icons/M/manage_search-fill.svg?v=738f44a2e87051121dab85daf3cce127daeb2b7f483fb0fcc451c40d9c1d6e18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
