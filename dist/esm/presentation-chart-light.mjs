export const name="presentation-chart-light";
export const id="dl_effa7880a7214de79e71";
export const url=new URL("../icons/presentation-chart-light.svg?v=334d480c50b4a72f1d96e91ed72195e5b07e141d148547bc5772988e041e5967",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
