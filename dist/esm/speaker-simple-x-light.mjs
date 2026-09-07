export const name="speaker-simple-x-light";
export const id="dl_a49bcdf9aeb440efaeca";
export const url=new URL("../icons/S/speaker-simple-x-light.svg?v=1892c57351dc8e34eb9aa189c402d6476de23aee45935f37aae00b07c87e0155",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
