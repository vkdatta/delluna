export const name="mountains-duotone";
export const id="dl_4b1d452ac4174bdeae8c";
export const url=new URL("../icons/mountains-duotone.svg?v=a66b69f180c5df0bf99bcc38cd3b8e41b32f5d6a496c9e41eaf451df090ffafa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
