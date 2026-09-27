export const name="format_paint";
export const id="dl_1063f8b84713688f241a";
export const url=new URL("../icons/format_paint.svg?v=727d388b7b5a422fce41b1edc9da411e498d14ec890546057216e5658cd9428b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
