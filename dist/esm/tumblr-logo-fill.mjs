export const name="tumblr-logo-fill";
export const id="dl_085102df303cf5f906f6";
export const url=new URL("../icons/tumblr-logo-fill.svg?v=14b484789c7cf9cad70867d7e3628b4944eaf044136f1615d9538156e8d1a28f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
