export const name="tipi-duotone";
export const id="dl_f3d75db531d710497201";
export const url=new URL("../icons/tipi-duotone.svg?v=da31f1f7fe6aa87706cb9a704d13126564b48217a6e9842de864b93a72f237be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
