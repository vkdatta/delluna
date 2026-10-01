export const name="carpenter-fill";
export const id="dl_726bb5a1d55d5cf95d69";
export const url=new URL("../icons/carpenter-fill.svg?v=c56fdbddea116f3aa5da65a8097f9385d2def0036bf6ccc93ae173ceb313bb5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
