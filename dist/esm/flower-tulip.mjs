export const name="flower-tulip";
export const id="dl_a1c7bae40b6c484cb9cc";
export const url=new URL("../icons/flower-tulip.svg?v=e1720f134a8abfcd75c5b63c3b793b928f2f460d1d8ad86372ff7c906e4875d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
