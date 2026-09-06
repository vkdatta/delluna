export const name="highlighter-duotone";
export const id="dl_12ed7ec3442a4bfab81d";
export const url=new URL("../icons/highlighter-duotone.svg?v=ff3dca58418048962ea779471be94d3f3fcdbd8cdd0d6b2c1eb8319638efcdb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
