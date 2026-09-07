export const name="court-basketball-light";
export const id="dl_b9ce11a285d946e5868f";
export const url=new URL("../icons/court-basketball-light.svg?v=da07cd8097042d2a56c1e689d594311cd08db401de97da5e838001a87c76ea18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
