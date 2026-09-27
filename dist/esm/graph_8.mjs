export const name="graph_8";
export const id="dl_0abb27f2b2c3d91e11c8";
export const url=new URL("../icons/graph_8.svg?v=9b3790f8ce35177828666d33338383dabc71debad5b52b6342b161219dd4b77c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
