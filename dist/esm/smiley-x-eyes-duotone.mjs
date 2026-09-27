export const name="smiley-x-eyes-duotone";
export const id="dl_da44f7a295e23103144b";
export const url=new URL("../icons/smiley-x-eyes-duotone.svg?v=005b24aa4691030eb1a85250e22a90e2e43ab38075a68ef9138705c6d4849f1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
