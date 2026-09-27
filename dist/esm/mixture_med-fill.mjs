export const name="mixture_med-fill";
export const id="dl_edacca81968c0abcef3c";
export const url=new URL("../icons/mixture_med-fill.svg?v=7a25b9a92ead3b33d3d6a9dc1b3206e32ae8619354b526262b063a7f5e339d78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
