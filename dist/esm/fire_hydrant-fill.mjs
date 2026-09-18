export const name="fire_hydrant-fill";
export const id="dl_27591d1b30c34f658bc8";
export const url=new URL("../icons/fire_hydrant-fill.svg?v=9898ef2c70034aba71f4b4206a2300d29efcf1ebdd21e61e9ad9ad4275b82e35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
