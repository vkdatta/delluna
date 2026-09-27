export const name="caret-circle-up-down-fill";
export const id="dl_53cf6dae6fc7480a9f2a";
export const url=new URL("../icons/caret-circle-up-down-fill.svg?v=4e437e6f627e1e0cb37d9b94fe5c09e967a30874e234723c387ea35d09f749d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
