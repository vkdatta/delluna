export const name="security_key";
export const id="dl_b974935cb001e3bc68c1";
export const url=new URL("../icons/security_key.svg?v=25851e204231f1b5b3dcb195404283719d304ae6faebf51ebeb7b976fbc53b1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
