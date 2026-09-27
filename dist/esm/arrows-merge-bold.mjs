export const name="arrows-merge-bold";
export const id="dl_28733bf0665947c2a005";
export const url=new URL("../icons/arrows-merge-bold.svg?v=a4d14929ce5ff9a397b4a01cdf50fbebd4c02f17e78d16dd26dc695c6b61e2fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
