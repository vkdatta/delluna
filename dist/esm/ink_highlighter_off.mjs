export const name="ink_highlighter_off";
export const id="dl_3bb4dec520c7715c41b2";
export const url=new URL("../icons/ink_highlighter_off.svg?v=3eb09e7fa0b1a9493abc99537f96e3c82aad9c92a7c51821479db29ab5fa0866",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
