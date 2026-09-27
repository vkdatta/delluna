export const name="bird";
export const id="dl_f9886e16770942b3be80";
export const url=new URL("../icons/bird.svg?v=8a94404c70783c34b4d792b8a66d1e82140a62694951fdf126528f68a00e15af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
