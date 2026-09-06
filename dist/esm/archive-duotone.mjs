export const name="archive-duotone";
export const id="dl_9dfe3a3576634200a730";
export const url=new URL("../icons/archive-duotone.svg?v=431c7f0bb63026b34f9381fd21cf90fc2368313356619edeb0cd40ee5d5a5ac4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
