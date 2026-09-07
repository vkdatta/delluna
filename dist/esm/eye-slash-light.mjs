export const name="eye-slash-light";
export const id="dl_70a137282718485494b3";
export const url=new URL("../icons/eye-slash-light.svg?v=3c5f3a2fc315dbb256f10bfde67963f092c4b4d47cef46605bd92271b995a198",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
