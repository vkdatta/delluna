export const name="court-basketball-thin";
export const id="dl_a1b40658424745e1a389";
export const url=new URL("../icons/court-basketball-thin.svg?v=226f3959a9a3dcd19738decac340893b5322ece41c22e117ae0f459a2c60976d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
