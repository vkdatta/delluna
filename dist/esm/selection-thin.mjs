export const name="selection-thin";
export const id="dl_f07f26fbf4c94da1b6c9";
export const url=new URL("../icons/S/selection-thin.svg?v=766cb599fb45790018ed7c7699414e85e1c88c6bd20859f390b4d9341d1d4bb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
