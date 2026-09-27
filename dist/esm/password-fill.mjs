export const name="password-fill";
export const id="dl_5deaf1ea0d43484ba935";
export const url=new URL("../icons/password-fill.svg?v=d2b13ee46f448440b8a9d50fa87b6ffafb51909716c3d19dce91a6c7575729c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
