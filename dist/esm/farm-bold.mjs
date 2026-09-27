export const name="farm-bold";
export const id="dl_ad49bfd308354c16a1c6";
export const url=new URL("../icons/farm-bold.svg?v=683e151b59e0c433ce1ae9e412929c3f362d17856bff8989ad634f539f57b907",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
