export const name="switches";
export const id="dl_881ee16ef3484d6f897a";
export const url=new URL("../icons/switches.svg?v=c4d4c1ab1ecd8ace55fd8e87d6b58c55021cdc1c0b88f5b3972d5b65de16fada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
