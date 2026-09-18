export const name="warning_off";
export const id="dl_a581611748eb4ac2a42f";
export const url=new URL("../icons/warning_off.svg?v=59ee002da74f311e4d7289b36026c297faa479c89e34d2cd3b2daf97d2a23042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
