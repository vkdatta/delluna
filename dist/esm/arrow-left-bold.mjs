export const name="arrow-left-bold";
export const id="dl_d5bb7e4248df4a8aa0b2";
export const url=new URL("../icons/arrow-left-bold.svg?v=7588792d7824e7c5337bca7b5de96ad0685ddea0a5732dfb62701d163a076563",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
