export const name="lucid_2-database-zap";
export const id="dl_ff944eb99d1e4efca2c6";
export const url=new URL("../icons/lucid_2-database-zap.svg?v=afbbc18f43f1a442953091d40aefe4456d08e549386ca46050526b8d518cc6a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
