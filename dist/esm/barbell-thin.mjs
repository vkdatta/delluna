export const name="barbell-thin";
export const id="dl_2ae8dcec4f4b42a5a8f1";
export const url=new URL("../icons/barbell-thin.svg?v=7ea50f2b966da272ab7e8fd4042e1705d652cb60d924effeb6da5a48ac0fa6b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
