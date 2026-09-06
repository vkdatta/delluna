export const name="highlighter-bold";
export const id="dl_c2d6458ea00a4ff58b46";
export const url=new URL("../icons/highlighter-bold.svg?v=4ccd62dcf73e471013a9dcbebe4c1a929d84382024785280b001cc9b4a735897",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
