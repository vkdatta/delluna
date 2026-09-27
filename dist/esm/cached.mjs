export const name="cached";
export const id="dl_d66a4d623ad54323ac55";
export const url=new URL("../icons/cached.svg?v=b6e854d2d0aa16d72dbcf1f7567dc2a8ceaf0f0fa1510350a9af5f0a1474ac9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
