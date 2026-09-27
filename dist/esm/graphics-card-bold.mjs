export const name="graphics-card-bold";
export const id="dl_95c5d90b5e394155a4e1";
export const url=new URL("../icons/graphics-card-bold.svg?v=46318b504e2e79d3d17703cd1c70072c52505fa6ed0a7b8fd4baa5867e8e6ac8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
