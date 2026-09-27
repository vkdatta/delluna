export const name="magnify_fullscreen";
export const id="dl_172ea597037f414d9935";
export const url=new URL("../icons/magnify_fullscreen.svg?v=092ba8f64c5cbbf1c1a03b909aec9ed9e19b1fa6addc2eac03e39d36e74a60ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
