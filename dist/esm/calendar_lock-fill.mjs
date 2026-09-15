export const name="calendar_lock-fill";
export const id="dl_928a4cfa0c6c477ab4d7";
export const url=new URL("../icons/C/calendar_lock-fill.svg?v=38f3b005351e767976fd0bb71e715d2062afc6f4043cbd934fd3a61bc77d6710",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
