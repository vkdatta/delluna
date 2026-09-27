export const name="arrow-square-up-light";
export const id="dl_f22c8105c7e64c0db1c4";
export const url=new URL("../icons/arrow-square-up-light.svg?v=6826adf01ffb9d83ccd3dcadb35faad2bbc2af362fa545ff8e81fcda2fa69104",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
