export const name="piano-keys-light";
export const id="dl_48600ae8120c4a6bba6a";
export const url=new URL("../icons/piano-keys-light.svg?v=dc4fa59c0639ed92fda9741dbcff6f82e54db7255d07b4d4661a2ebd34cc5aaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
