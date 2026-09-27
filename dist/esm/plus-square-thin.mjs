export const name="plus-square-thin";
export const id="dl_0984ae8854f849d09b5e";
export const url=new URL("../icons/plus-square-thin.svg?v=d54e1c735df3ea55348914232184a61c728feaf8e301059f122b8c6e9d83b8ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
