export const name="command-fill";
export const id="dl_16f8ed07445f4401b247";
export const url=new URL("../icons/command-fill.svg?v=8362d9c45b39eb08ef6c0c48f3f57afe63700dd146d7cbe3be65693ff4ab73c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
