export const name="rainbow";
export const id="dl_df28536f284f4115b11c";
export const url=new URL("../icons/rainbow.svg?v=96728c780805e49060c0c1402b2594c92e162d803f651ff6d5423872183639cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
