export const name="steam-logo-fill";
export const id="dl_351e3511bbc36f28770e";
export const url=new URL("../icons/steam-logo-fill.svg?v=8653da73b0214f0476bad1735409d797a2b6696b7944d00937f20f3d9fcc9a46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
