export const name="onigiri-light";
export const id="dl_263d4f1402634b34b62e";
export const url=new URL("../icons/onigiri-light.svg?v=864fd6ab53fe9806c66d6141b557890d2e5310d315770f2839cfbce8b0eae8af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
