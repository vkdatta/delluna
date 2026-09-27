export const name="trending_down-fill";
export const id="dl_37dfbbcc8727c98d17f3";
export const url=new URL("../icons/trending_down-fill.svg?v=c75fbfb9329bf9f45d97d836cd35e0c0f1044684f009f9128467fe69b7f4a490",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
