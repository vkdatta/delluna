export const name="vignette-duotone";
export const id="dl_88cf70bf41f87e04808b";
export const url=new URL("../icons/vignette-duotone.svg?v=338ad74fcc4c65a37c6fd9fd7047fedb12a790fef3e200848001742942ae236f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
