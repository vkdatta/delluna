export const name="swipe_right-fill";
export const id="dl_fd0a8d58feb86b53ac53";
export const url=new URL("../icons/swipe_right-fill.svg?v=8f72b07efefd3be8e09afb10ddba63798365dc20ab3066f7b1ddfc46820da8e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
