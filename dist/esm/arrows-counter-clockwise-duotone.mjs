export const name="arrows-counter-clockwise-duotone";
export const id="dl_aef525055b994ca88e46";
export const url=new URL("../icons/arrows-counter-clockwise-duotone.svg?v=d20a6264c6b807f7bad918086c35c5e141f9d6d0c7e83ce2bbb753e80f7e5111",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
