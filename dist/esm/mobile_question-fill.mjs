export const name="mobile_question-fill";
export const id="dl_e568c2b0b6c54091839a";
export const url=new URL("../icons/mobile_question-fill.svg?v=652ad07c68bdc88c97742e517ce5b1897f3b3783954829a2a749cee58998b458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
