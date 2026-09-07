export const name="shrimp-bold";
export const id="dl_9dc0dd06411e48ccbc8c";
export const url=new URL("../icons/S/shrimp-bold.svg?v=3af2dab6c4561f1a809fde4808dd73ab1eb7a81ebf245f46f364dd8b874003c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
