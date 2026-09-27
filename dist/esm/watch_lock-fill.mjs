export const name="watch_lock-fill";
export const id="dl_9a9f52bcdf4120d20d44";
export const url=new URL("../icons/watch_lock-fill.svg?v=6c8a3c551a79e3a5949f5674cb31fd2db43e023be95af0cde387e9587b3bef0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
