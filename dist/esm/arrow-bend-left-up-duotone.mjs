export const name="arrow-bend-left-up-duotone";
export const id="dl_9555bf0df26c42288f58";
export const url=new URL("../icons/arrow-bend-left-up-duotone.svg?v=7f5a1cf499009509d079d99ca38738f23520c75fa81e0cc21fd4cc8f95291463",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
