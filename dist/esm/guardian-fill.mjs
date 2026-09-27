export const name="guardian-fill";
export const id="dl_be56231c9b64679d2eeb";
export const url=new URL("../icons/guardian-fill.svg?v=9b10166c9dc58a9672ecf21349c5ce3f3b433fb693f0a6bd1a85b6da3e643793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
