export const name="perspective";
export const id="dl_1a87bd5760614e3f9a52";
export const url=new URL("../icons/perspective.svg?v=9461309bfbe7b960ed1449a368f74181e7fcb3d17d91a0d8c295d5cf2b63144f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
