export const name="superscript";
export const id="dl_601c7e5dd4ce4b6f90bb";
export const url=new URL("../icons/superscript.svg?v=3dbe2bb9045d3c367914e44540e5cfa56f00fbfb8859ba0238de108c6c800f0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
