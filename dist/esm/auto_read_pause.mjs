export const name="auto_read_pause";
export const id="dl_6697b594386245478cb2";
export const url=new URL("../icons/A/auto_read_pause.svg?v=102ffe9a191f464a48c0acd5c79e3621d6fe73f6b7b88032b1361417da76e304",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
