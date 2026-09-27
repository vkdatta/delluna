export const name="square-pilcrow";
export const id="dl_a2024cdc654544b3ab79";
export const url=new URL("../icons/square-pilcrow.svg?v=79d44dac0482e9063f2727feee25fac2246fd234e89cfd4cd2217f6a97129513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
