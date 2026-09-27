export const name="hand-swipe-left-thin";
export const id="dl_9b84a105037e43128bf5";
export const url=new URL("../icons/hand-swipe-left-thin.svg?v=7dee6d1cc803763ef8697233010efedf2f5a9835cf3aaaa50e19f0bfbb44549a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
