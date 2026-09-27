export const name="user-circle-light";
export const id="dl_b547eebaad635b7a510d";
export const url=new URL("../icons/user-circle-light.svg?v=e5c66cc12ec12e8128b71d31f70a0de3431f7365f74c72e62d10e13855565aba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
