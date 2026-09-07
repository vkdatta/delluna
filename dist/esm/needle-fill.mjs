export const name="needle-fill";
export const id="dl_71b76d6aa07049e6bc89";
export const url=new URL("../icons/needle-fill.svg?v=e9fea32a7975a87ef1bc48107221735ff6643ae0851e700377b465c857b0697a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
