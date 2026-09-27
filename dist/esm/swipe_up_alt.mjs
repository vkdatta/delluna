export const name="swipe_up_alt";
export const id="dl_61c6cb305432b476091f";
export const url=new URL("../icons/swipe_up_alt.svg?v=266fcf807c03e63456898fb4de2adb044a6a392d103efbb1f605e37b85a3b161",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
