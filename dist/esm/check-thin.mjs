export const name="check-thin";
export const id="dl_a041fc77ef234e8cb5f9";
export const url=new URL("../icons/check-thin.svg?v=e3d072d7dfac13a147b90892a81e1dd8b8022355f2d660574b5fde97e515629a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
