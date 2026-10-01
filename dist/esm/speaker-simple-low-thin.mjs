export const name="speaker-simple-low-thin";
export const id="dl_529d5d85ba542f063d98";
export const url=new URL("../icons/speaker-simple-low-thin.svg?v=607da73caaab48963122a1b4b6d4fcdbcfd6970a8b4a9a124dc58b0008dbf45e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
