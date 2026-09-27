export const name="jar-label";
export const id="dl_06f2da1196bf4edbb93d";
export const url=new URL("../icons/jar-label.svg?v=e829fe31aa5b99354403d62dbe08fdf582e93b170743cd008c066f285d328d50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
