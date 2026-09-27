export const name="deployed_code_history-fill";
export const id="dl_c5119111e3b7ae7079a3";
export const url=new URL("../icons/deployed_code_history-fill.svg?v=2d105f49cf92ae1e2e200f1faa0a7b36ed894964f147bb86eb46d0150413a66c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
