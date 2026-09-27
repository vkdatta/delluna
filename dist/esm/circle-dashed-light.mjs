export const name="circle-dashed-light";
export const id="dl_f4ae541e0f394ec9b755";
export const url=new URL("../icons/circle-dashed-light.svg?v=c24261a26bf576f1318f8b25576ccde0527edccffee33d17e741d18341a18284",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
