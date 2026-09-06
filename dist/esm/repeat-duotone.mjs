export const name="repeat-duotone";
export const id="dl_923f5e9c930b4d339515";
export const url=new URL("../icons/repeat-duotone.svg?v=3b6c818a506d0a591de61f835504b2a4828c3a1be60132dd49bfa5a64f60d541",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
