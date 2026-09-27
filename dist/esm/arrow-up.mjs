export const name="arrow-up";
export const id="dl_4149467a8fbf4e7c82c9";
export const url=new URL("../icons/arrow-up.svg?v=c567fd3add210b784d0f1be2565c2a4f439e1c0adc783b7662ce8183fc80827c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
