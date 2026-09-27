export const name="island-light";
export const id="dl_ba42cf08086e4f12b0f0";
export const url=new URL("../icons/island-light.svg?v=2753ebc4db7bd7dc1b802335d6c54c76f559f9ba366a31ef0ab2af37f149d583",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
