export const name="navigation-arrow-light";
export const id="dl_079282456aea4d88944b";
export const url=new URL("../icons/navigation-arrow-light.svg?v=863c86efda74736d236018825be93036790a30ba4123689b6ec9f3a81efa0880",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
