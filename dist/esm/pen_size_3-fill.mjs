export const name="pen_size_3-fill";
export const id="dl_c35c8a8d9cf2eb8e9e4b";
export const url=new URL("../icons/pen_size_3-fill.svg?v=4f6247535f0dbe452a27e3cad4e56e879f1e0a05ab7c6ada4f3c73bf20cdcf3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
