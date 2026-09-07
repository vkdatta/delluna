export const name="circle-dashed-thin";
export const id="dl_751f395f63e1419cb149";
export const url=new URL("../icons/circle-dashed-thin.svg?v=424afe23b958162ec9dd48f3ef1190731fbd2d1eeffe3ebb16748824d8823533",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
