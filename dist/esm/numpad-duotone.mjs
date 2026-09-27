export const name="numpad-duotone";
export const id="dl_60f9c8fd5cb2429a8f0d";
export const url=new URL("../icons/numpad-duotone.svg?v=02fe9abf8647dc643c2190c6935d53d3b60286b5a4fcf6c1dfd79f86a1097d46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
