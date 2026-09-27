export const name="hand-swipe-right-duotone";
export const id="dl_96f631775bfb4bc28766";
export const url=new URL("../icons/hand-swipe-right-duotone.svg?v=1d93de3955b9c837f63a56c21bef9e6012211c39c8618774166faa824b6f0f06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
