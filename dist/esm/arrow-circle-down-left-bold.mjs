export const name="arrow-circle-down-left-bold";
export const id="dl_fa2a59a771014d558556";
export const url=new URL("../icons/arrow-circle-down-left-bold.svg?v=0ae9083053e33c0615d2435e06606dcdaa5d3383132d8fc0829be175e585e169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
