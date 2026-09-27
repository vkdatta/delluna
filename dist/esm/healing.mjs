export const name="healing";
export const id="dl_25cf18417b91b911cfe4";
export const url=new URL("../icons/healing.svg?v=e6817d3c7f7bf3a61243bc83cff3ef1840d3cd59df20011318ffa547b54560cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
