export const name="envelope-simple";
export const id="dl_d28675cce9754b28b485";
export const url=new URL("../icons/envelope-simple.svg?v=f114441afbd3c3da8aee24ba4cddea1576cf55aa304eb507410fca494c8ee169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
