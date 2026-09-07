export const name="suitcase-simple";
export const id="dl_c2868712d92b41928d27";
export const url=new URL("../icons/S/suitcase-simple.svg?v=3e13d1caf04bb4759e4cacc81214e5f84b360c8120c2a6b7c20b4b885c428922",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
