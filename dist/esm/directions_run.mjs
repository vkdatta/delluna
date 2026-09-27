export const name="directions_run";
export const id="dl_9f220cca0fa849f61b8a";
export const url=new URL("../icons/directions_run.svg?v=f1964a736438f6dec5bab88ccaeb727601d682a60bd2236d831afa5df0ca8982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
