export const name="13mp-fill";
export const id="dl_a8ef78f28a61ef641440";
export const url=new URL("../icons/13mp-fill.svg?v=395054ebd07171166c8ceaaa7ccdd4e7b41791035c0774804018dba1b132daa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
