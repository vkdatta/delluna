export const name="boat_railway-fill";
export const id="dl_10d594aa085e7cc652ab";
export const url=new URL("../icons/boat_railway-fill.svg?v=262a833973cdb6f21885cf24a09d354e4efdd346657c2433a768ee2033b81538",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
