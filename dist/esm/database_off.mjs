export const name="database_off";
export const id="dl_bea7ea804d1c0c098e0e";
export const url=new URL("../icons/database_off.svg?v=9c40522d9690f840a865eb96e87c53012a8caa139b983d258559e94f169fe061",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
