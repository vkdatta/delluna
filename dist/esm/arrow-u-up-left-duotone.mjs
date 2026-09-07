export const name="arrow-u-up-left-duotone";
export const id="dl_92f4f03693d5404cadec";
export const url=new URL("../icons/arrow-u-up-left-duotone.svg?v=23c40b3701ce556eee89166f7c0aea2ee200177af773cddd0f538c1b152ee442",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
