export const name="map_search";
export const id="dl_df4891d218991de1d997";
export const url=new URL("../icons/map_search.svg?v=4c9a29fb4611bd4f60604414a5653b15eef83ed73576e67cf695dc55784805fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
