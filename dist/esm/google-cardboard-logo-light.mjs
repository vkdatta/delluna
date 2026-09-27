export const name="google-cardboard-logo-light";
export const id="dl_8ccec47bf97f4da398f8";
export const url=new URL("../icons/google-cardboard-logo-light.svg?v=2337fdb762a43f39765d0ff9ba8a685f17714b2886b658ecbc0283d9bfb674c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
