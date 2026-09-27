export const name="four-k-duotone";
export const id="dl_978458b1576946b3bcb2";
export const url=new URL("../icons/four-k-duotone.svg?v=7135656378e67555ba6715990ca3970aee18307906692c80723c2ad6e96b754b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
