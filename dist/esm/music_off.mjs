export const name="music_off";
export const id="dl_6c8c35b940d50582f6c0";
export const url=new URL("../icons/music_off.svg?v=3c03ea837519cf8f6b3d21856f82e7964860b98d6a303fdaf326ecfe3c3be2d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
