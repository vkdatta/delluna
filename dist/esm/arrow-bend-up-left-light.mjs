export const name="arrow-bend-up-left-light";
export const id="dl_d6c36cb410ba49f6b21d";
export const url=new URL("../icons/arrow-bend-up-left-light.svg?v=08b3c300b0d11fae7dfb2cc1a119fea335bf4a777d62038a22d723cc8dcb8743",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
