export const name="dark_mode-fill";
export const id="dl_713cc5223b247af3ec35";
export const url=new URL("../icons/dark_mode-fill.svg?v=2bb1546998d049c751b862a6f61fa293ca3d64edf8c2aa3fcfc1b2e7725da0a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
