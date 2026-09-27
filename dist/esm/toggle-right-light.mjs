export const name="toggle-right-light";
export const id="dl_9e14e831ed051b9342bf";
export const url=new URL("../icons/toggle-right-light.svg?v=8d80a2d742523fa55b7406a67a76553b12185ccf56480ccc0431a841823797f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
