export const name="timer_10";
export const id="dl_e11e1c8bc4d54823f31c";
export const url=new URL("../icons/timer_10.svg?v=eed388d6bc7f13284d6b79ea7528041d76072e62168c479809e7f7b6ff80f5ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
