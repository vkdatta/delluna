export const name="image-broken-duotone";
export const id="dl_c5b29a936ce64e9bb058";
export const url=new URL("../icons/image-broken-duotone.svg?v=f5501fe3907fbbd8a09940578d7c3897e65ea9182dc6a60f58363c1079389443",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
