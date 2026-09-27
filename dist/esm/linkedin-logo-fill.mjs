export const name="linkedin-logo-fill";
export const id="dl_dd0b5bf6b58f45d1b3fd";
export const url=new URL("../icons/linkedin-logo-fill.svg?v=fdcd60701c93d284337e5616d376c0f30879745ed6b031b53d01a815cab045a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
