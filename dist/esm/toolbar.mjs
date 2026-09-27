export const name="toolbar";
export const id="dl_1d7a2a7511f8e4d68040";
export const url=new URL("../icons/toolbar.svg?v=d2caf60e96abf0886b2af596ee3ef5918f21c5e685b3ffab6248632ffc98e84e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
