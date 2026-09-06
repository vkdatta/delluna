export const name="sigma";
export const id="dl_9d7c59380a794d368a39";
export const url=new URL("../icons/sigma.svg?v=71e1ab3dbad585956c4a386c87b89ebd57465e10a61cb515759f0b44e7c7100a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
