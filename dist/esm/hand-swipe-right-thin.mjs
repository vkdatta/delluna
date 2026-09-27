export const name="hand-swipe-right-thin";
export const id="dl_363a6e75133d45c8bbd9";
export const url=new URL("../icons/hand-swipe-right-thin.svg?v=aeebaa5e8b6c0c558b1892b109324297a171b4097d8bd285f4032881dde5629e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
