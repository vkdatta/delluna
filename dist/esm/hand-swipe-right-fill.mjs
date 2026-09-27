export const name="hand-swipe-right-fill";
export const id="dl_28a218de52144794b925";
export const url=new URL("../icons/hand-swipe-right-fill.svg?v=f29786b3d84b6eb35296196011bc829b30d5e4b5abc36d0b84fbed72a33d2260",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
