export const name="equal-fill";
export const id="dl_b4f30828c6abae485d0d";
export const url=new URL("../icons/equal-fill.svg?v=5fb079d9dade31ef203201ce224e85834d7daada50d374e9173e217e4c23b224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
