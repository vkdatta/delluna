export const name="hand-swipe-right-thin";
export const id="dl_363a6e75133d45c8bbd9";
export const url=new URL("../icons/hand-swipe-right-thin.svg?v=ee9464d7238d6c0c295074680333681be04f30da0c596a4d2172aa109dbebdc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
