export const name="arrows-out-duotone";
export const id="dl_786d9378817f495abd2f";
export const url=new URL("../icons/arrows-out-duotone.svg?v=d389b26d25e887eef45609624de9aa04c92fe94c3981be5a52a416b7014800fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
