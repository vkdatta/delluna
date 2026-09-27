export const name="hand-swipe-left-thin";
export const id="dl_9b84a105037e43128bf5";
export const url=new URL("../icons/hand-swipe-left-thin.svg?v=3620e3d3011f071ccfb79c0b44d72119fc3828d538112610789445d567cdad0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
