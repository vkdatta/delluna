export const name="files";
export const id="dl_2283eff751484c7e891a";
export const url=new URL("../icons/files.svg?v=338fb0697901b97d5542db099631c67e611f3bf02da63e48345dde0b64cde5a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
