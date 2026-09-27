export const name="anchor-simple-duotone";
export const id="dl_bf5e36db81f54f309a56";
export const url=new URL("../icons/anchor-simple-duotone.svg?v=7bf6e2c88f9b2ef72d5ec78164d0193cd7d538c17cc6962dd0ec549a7d2735ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
