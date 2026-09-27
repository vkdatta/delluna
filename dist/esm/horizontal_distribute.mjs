export const name="horizontal_distribute";
export const id="dl_57ac8da52aa301e7501a";
export const url=new URL("../icons/horizontal_distribute.svg?v=c5b9eb53827432a40dea9548bab28e4d5392aa9f3067a3adee3ed727f70f6a80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
