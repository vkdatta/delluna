export const name="bath_outdoor";
export const id="dl_53b86b831c121fe5f7e2";
export const url=new URL("../icons/bath_outdoor.svg?v=5d97282e85dce0fd5078b31e5f91a3b4f84c316497f9004edc382f02e17b4431",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
