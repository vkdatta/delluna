export const name="arrow-fat-lines-left-light";
export const id="dl_91e85ace376842f896c6";
export const url=new URL("../icons/arrow-fat-lines-left-light.svg?v=9a542a0fef2aeec70a34f7835d96d89b9066644088c53feb0a14ec1512950f4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
