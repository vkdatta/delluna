export const name="outer-ring-x";
export const id="dl_a8f9b78dd1fa38e9a5ca";
export const url=new URL("../icons/outer-ring-x.svg?v=153a8fa8a7d06640d1cd78b8e269de9ba55221a8b5e56dfdc3e0eaebe158b7a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
