export const name="path";
export const id="dl_4a7453390b5c471986c0";
export const url=new URL("../icons/path.svg?v=9555eaaf5e72edd365e59a6cfd38002604a2d0b48d64cca269d6eb969da334f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
