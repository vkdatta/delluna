export const name="lucid_2-credit-card-reader";
export const id="dl_1bab677e329049e9bfa1";
export const url=new URL("../icons/lucid_2-credit-card-reader.svg?v=61eafb343b826390669b7080cbcdb6efe91c8ebc3c0631ef56b5dc2215e4b688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
