export const name="gps";
export const id="dl_e7a5365f7799496da3c1";
export const url=new URL("../icons/gps.svg?v=eb990f941ee3ba9ea24694f42197a4eb2b0336c35c4b665e59e55c454a000e72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
