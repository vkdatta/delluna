export const name="directions_railway-fill";
export const id="dl_2411857b00a742409dca";
export const url=new URL("../icons/D/directions_railway-fill.svg?v=a651d2bc077ca94f68ddf66bc282bdd49933d80fe962dceefcfebe5a1866016a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
