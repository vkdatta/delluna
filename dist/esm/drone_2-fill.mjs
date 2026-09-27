export const name="drone_2-fill";
export const id="dl_75186415436d4c53c2a1";
export const url=new URL("../icons/drone_2-fill.svg?v=217f2030bea9192ccd69cb480e1d05673f45ec52c2bcee96954052cd9bd338ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
