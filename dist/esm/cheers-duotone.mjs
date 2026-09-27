export const name="cheers-duotone";
export const id="dl_17376eb6ceee4a919544";
export const url=new URL("../icons/cheers-duotone.svg?v=29eff8cc564a9a288cf4b7ff9516cc6f3f2a7679051497ab45f6327ad985f52a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
