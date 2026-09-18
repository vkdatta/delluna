export const name="settings_ethernet-fill";
export const id="dl_6da5bb9c0a01471fbb68";
export const url=new URL("../icons/settings_ethernet-fill.svg?v=401fe21c5904b16ae42eef2ff40232036e86b033aff82d6f5a3bff08515505c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
