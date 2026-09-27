export const name="method";
export const id="dl_d323435fddc44231a43b";
export const url=new URL("../icons/method.svg?v=d995fa5360b4e678ba3f637047b19e01f0b6aa8c233d5abf55ac04c1533fd64d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
