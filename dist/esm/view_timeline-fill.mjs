export const name="view_timeline-fill";
export const id="dl_cd7b06aea8d84cb0b633";
export const url=new URL("../icons/V/view_timeline-fill.svg?v=b5586ee69029f7980628fd2a8c6627e5c60ba957365089de647b5387c76b3eb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
