export const name="arrow-fat-line-right-duotone";
export const id="dl_8c339143642249348ec7";
export const url=new URL("../icons/arrow-fat-line-right-duotone.svg?v=48119fbc06db033f8b3e2a4bb3bbd530818fc0f27b5310010280bcfd3a420076",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
