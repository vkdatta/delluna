export const name="bomb-bold";
export const id="dl_761fa84b40384fd0b403";
export const url=new URL("../icons/bomb-bold.svg?v=156f67252b78fdccc807c8706f2b52d445fc50c279c13153d2eaa56163c62a3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
