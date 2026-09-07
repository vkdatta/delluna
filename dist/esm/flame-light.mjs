export const name="flame-light";
export const id="dl_526bd1d000174b86810c";
export const url=new URL("../icons/flame-light.svg?v=72e9499f2d2fce45dcdab804038efcfdb9305dd564fabd07f0ceca7a0f8feca8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
