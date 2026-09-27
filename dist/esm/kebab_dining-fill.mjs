export const name="kebab_dining-fill";
export const id="dl_6d541a6b84a12ee3be7d";
export const url=new URL("../icons/kebab_dining-fill.svg?v=a98606dc1d9aa1cef2cd8b61c0848f1ad1fe3141438d8b2fd62a843d34c729ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
