export const name="arrow-line-down-left-fill";
export const id="dl_c52070c60c0f46a3a4a1";
export const url=new URL("../icons/arrow-line-down-left-fill.svg?v=fb30db32cd31ea30b2c464d3fa63164ed7431e99d76aab5665e81ea403ff0357",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
