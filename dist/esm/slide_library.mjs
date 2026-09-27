export const name="slide_library";
export const id="dl_8814b76e4b5cf6a0418a";
export const url=new URL("../icons/slide_library.svg?v=a22049e91809a4a2bb9a43c44a2c63398c5666f516959e916a9aa365ed9cc41e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
