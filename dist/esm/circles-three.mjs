export const name="circles-three";
export const id="dl_91379157fa7945879212";
export const url=new URL("../icons/circles-three.svg?v=ec8a76d9ec9eccad94ff017fd42491ae3e09909ac843e65560e23e8905875872",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
