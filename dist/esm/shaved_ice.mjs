export const name="shaved_ice";
export const id="dl_99d264407ce97a1d05fa";
export const url=new URL("../icons/shaved_ice.svg?v=a398b5a5b4579388e29dea6d035ec8085111cb88ac5bf60e848c3b2185772112",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
