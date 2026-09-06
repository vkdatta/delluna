export const name="lucid_1-case-sensitive";
export const id="dl_c0e729b923fd49caa0cb";
export const url=new URL("../icons/lucid_1-case-sensitive.svg?v=29854aa3ccc7981122fca20d41d543fcc585251aba174006cff199da182403b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
