export const name="draw-fill";
export const id="dl_c3e5973375b1f6230218";
export const url=new URL("../icons/draw-fill.svg?v=044216334eb11f7451b06ca7891ab4cdf132ed5e303cae49b5bc596c9ff33e7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
