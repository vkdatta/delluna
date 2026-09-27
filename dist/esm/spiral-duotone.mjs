export const name="spiral-duotone";
export const id="dl_a0713840fc6a043ddae0";
export const url=new URL("../icons/spiral-duotone.svg?v=2bca01c0758da44060cc492eb20627fbbf7625e14dfdcd46aa79947fe642a41b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
