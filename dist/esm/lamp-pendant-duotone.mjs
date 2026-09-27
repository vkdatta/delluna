export const name="lamp-pendant-duotone";
export const id="dl_d6eb34cfca1241b7ab10";
export const url=new URL("../icons/lamp-pendant-duotone.svg?v=409afea31868d1b3bcae82ad28f5d53c4e710c9b9b9cc65b83fa0592ffc31438",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
