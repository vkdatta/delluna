export const name="skillet-fill";
export const id="dl_4e761897f1f07d5c3612";
export const url=new URL("../icons/skillet-fill.svg?v=96e9b46b0d9acacd161574d3bf66def4a577b6b491ced132126a9e3e1a352ae0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
