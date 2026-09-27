export const name="collapse_left";
export const id="dl_cec3077948f811e910af";
export const url=new URL("../icons/collapse_left.svg?v=0899142ed2e8b2f555b2f5979a4bb66c4177db6e839e649ab9fb4339b5d3ad8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
