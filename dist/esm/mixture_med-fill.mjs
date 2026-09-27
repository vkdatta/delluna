export const name="mixture_med-fill";
export const id="dl_affa5fd9b5c61ecc1fa1";
export const url=new URL("../icons/mixture_med-fill.svg?v=4d3ba9670ab2436d8888c50d9a831f870c0662d041fea0d74ba44daba362b32c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
