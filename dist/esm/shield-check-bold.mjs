export const name="shield-check-bold";
export const id="dl_e40eae9d3a04f8e52d62";
export const url=new URL("../icons/shield-check-bold.svg?v=e3e494225c7d7b58e21e4a167663258e2beffdec4641be520fb1f50229ed09f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
