export const name="folder-simple-dashed-light";
export const id="dl_5e7b9eae24f64ef7bc96";
export const url=new URL("../icons/folder-simple-dashed-light.svg?v=bd71844ec982d7bc966729485098dadf7c392d87b74286a37da7653b2e3e4da9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
