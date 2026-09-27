export const name="speaker-simple-x-light";
export const id="dl_774b06f53b7156cc842a";
export const url=new URL("../icons/speaker-simple-x-light.svg?v=7dfdae78144ac0149ebd0acd49bdb34dc063cc745b9a0828fbbbce5b0a6f831d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
