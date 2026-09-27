export const name="tactic-fill";
export const id="dl_be43c4408181874135c6";
export const url=new URL("../icons/tactic-fill.svg?v=26414b8b13e71cce0a995b83ae9957b555aab14abc544a2b109e756b27e67752",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
