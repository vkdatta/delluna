export const name="folder-plus-light";
export const id="dl_f5c75d45aff548f2a5b4";
export const url=new URL("../icons/folder-plus-light.svg?v=ac07801832208a734866013a779761f6bce54a17300f444def8b155ba3170396",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
