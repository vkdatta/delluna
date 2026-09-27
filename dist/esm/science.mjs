export const name="science";
export const id="dl_f71440d4857ad224f82c";
export const url=new URL("../icons/science.svg?v=738fff69184c931383f0eaf97f9a12248082f56e53139d122f62033f54d99741",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
