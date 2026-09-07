export const name="text-italic-light";
export const id="dl_f3166e399ef145fab14d";
export const url=new URL("../icons/T/text-italic-light.svg?v=e64f4c97383c4852231211cf480d90ecd223b9614675ed70595bffd7bb9bc02d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
