export const name="function_arrow";
export const id="dl_4ef508e8b149469785a9";
export const url=new URL("../icons/function_arrow.svg?v=1e8a00ea08611ec5c7e008fa9def58b23616fbec7f794051ce1746917d5cd52f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
