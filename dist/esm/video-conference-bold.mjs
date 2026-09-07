export const name="video-conference-bold";
export const id="dl_6e454584d11e483c90f0";
export const url=new URL("../icons/V/video-conference-bold.svg?v=23a09b6e57129a753f36b30ba72a63a8c492bc16746201a4fae7be8dd6c1e552",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
