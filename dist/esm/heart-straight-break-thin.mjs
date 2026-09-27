export const name="heart-straight-break-thin";
export const id="dl_a55935ab37844341a6f1";
export const url=new URL("../icons/heart-straight-break-thin.svg?v=08835590a6751f0653ed7e05add8f1d1a42234211c3eecca1f2fcb47c2f16108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
