export const name="repeat-once";
export const id="dl_0ca9b1f90e554e6584d0";
export const url=new URL("../icons/repeat-once.svg?v=13eeede432c501175252a5c25c3639320bfdaca6482360684380f86e8f735a29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
