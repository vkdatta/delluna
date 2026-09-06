export const name="lock-key-open-fill";
export const id="dl_ed52b268a26046debb9b";
export const url=new URL("../icons/lock-key-open-fill.svg?v=abddfa79e348a6820bbf87d2c9437c0b552cea9d5c7d51cab95c010d033041e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
