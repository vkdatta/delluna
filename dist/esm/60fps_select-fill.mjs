export const name="60fps_select-fill";
export const id="dl_2bf2b507960da7284faa";
export const url=new URL("../icons/60fps_select-fill.svg?v=cf004ea5887feee964f8f289250d3013ccbd623e7ef163e967d7bb90c7aea0e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
