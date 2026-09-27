export const name="play-fill";
export const id="dl_c74cfe49492a4d9a8a4a";
export const url=new URL("../icons/play-fill.svg?v=2b60f1c2d0d9a4c4b7101e226ede40d342e691605aeeb1091b75d2ec0ac8456d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
