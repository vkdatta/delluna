export const name="reset_wrench-fill";
export const id="dl_f5c7ea0efde94d5fab87";
export const url=new URL("../icons/R/reset_wrench-fill.svg?v=f443670c1181dc831b36331a732c986d017b79fd13d0d906a40098e8c5f10a26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
