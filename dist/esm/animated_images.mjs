export const name="animated_images";
export const id="dl_9ab41459594d8af161de";
export const url=new URL("../icons/animated_images.svg?v=1d2e292b37a2d77075d7451b1152a9cfcd0b5ca52a9edb7d9e4529ed4e83c80b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
