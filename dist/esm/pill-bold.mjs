export const name="pill-bold";
export const id="dl_c11216e3843640e4b1f3";
export const url=new URL("../icons/pill-bold.svg?v=d6dacd3333cc79899d5560174671ec0dc073b6d13bf9d5f77ef631f88b170f1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
