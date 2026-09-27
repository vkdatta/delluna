export const name="app-store-logo-light";
export const id="dl_383ceed7d90740c38ef6";
export const url=new URL("../icons/app-store-logo-light.svg?v=943d40b11574e4596299a6829b35ea1bf469643e91b464572a64f2df08001cc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
