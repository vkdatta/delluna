export const name="newspaper";
export const id="dl_5f61da5328eb4ebfb6f3";
export const url=new URL("../icons/newspaper.svg?v=edd422b8baf7fcbe2e4ee511b7926f1b92d40e344115fd1ae816d3ff37edab5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
