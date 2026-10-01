export const name="timer-thin";
export const id="dl_32e97cd5bca53bdf69dc";
export const url=new URL("../icons/timer-thin.svg?v=937d6623424120b6c844367750679147cde537d77f8c15bf75159ae02421d8fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
