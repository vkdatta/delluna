export const name="mobile_rotate";
export const id="dl_ef64f09899052dd7df9a";
export const url=new URL("../icons/mobile_rotate.svg?v=982279fc0da4fe2d95f28dde2b7d2963ce94b317f095a5797b99d9f50c44791b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
