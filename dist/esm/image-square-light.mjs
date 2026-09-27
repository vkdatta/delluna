export const name="image-square-light";
export const id="dl_1250f4bb1e9b44cfbd82";
export const url=new URL("../icons/image-square-light.svg?v=ee2a3f93dc0feafba2dca898d93c0d4101d879d6e4fc440f1d78f6b272103768",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
