export const name="toggle-left-light";
export const id="dl_5d4e0452c75068de43a6";
export const url=new URL("../icons/toggle-left-light.svg?v=4a21b736efe0601f2f3cb630e6373adceb9c28922f6212ef491831cd3d2dc3a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
