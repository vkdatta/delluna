export const name="desktop_cloud_stack-fill";
export const id="dl_d8dae9a026c74d38a1fc";
export const url=new URL("../icons/desktop_cloud_stack-fill.svg?v=312a4df2ee347d95017e3f1e9a59a1ace3a1889ec0d265d69a1de85b9265bc78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
