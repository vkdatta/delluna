export const name="rotate_90_degrees_ccw";
export const id="dl_6b05c7eb8d45d13c5186";
export const url=new URL("../icons/rotate_90_degrees_ccw.svg?v=015d8cee6c0011cd27c726e363f3696f08b3241e8af9074fc04925f3b77f6f55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
