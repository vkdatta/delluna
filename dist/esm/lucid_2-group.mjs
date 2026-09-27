export const name="lucid_2-group";
export const id="dl_0c836327181141cd967d";
export const url=new URL("../icons/lucid_2-group.svg?v=6cd167aade542ce3655234c61429d5dafe17d4652fb4ac6ef1cba63b03506fe1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
