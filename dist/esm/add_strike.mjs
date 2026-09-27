export const name="add_strike";
export const id="dl_ca2e342b826b8bbabcef";
export const url=new URL("../icons/add_strike.svg?v=b75ce334aaf8305959ef6a9c673eb71627817b42469d49690ab485b732da870e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
