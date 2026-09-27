export const name="presentation-chart-duotone";
export const id="dl_3a1bce5ab88c4f72b998";
export const url=new URL("../icons/presentation-chart-duotone.svg?v=0920343cb000a2232fca344dba25b0cbc778c1b43150896aa73fb8eebce5ff15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
