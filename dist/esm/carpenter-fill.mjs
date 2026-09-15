export const name="carpenter-fill";
export const id="dl_75e9427637034a36a4cc";
export const url=new URL("../icons/C/carpenter-fill.svg?v=c56fdbddea116f3aa5da65a8097f9385d2def0036bf6ccc93ae173ceb313bb5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
