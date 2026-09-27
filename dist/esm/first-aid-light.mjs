export const name="first-aid-light";
export const id="dl_de83b7ff3a0344acb0da";
export const url=new URL("../icons/first-aid-light.svg?v=1ca3f0bd8b990c310aecd3e52acefdb1999419325a2e1840dbb680ffa4516be0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
