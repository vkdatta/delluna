export const name="arrow-elbow-right-bold";
export const id="dl_7c718c0cfd6546c38fa7";
export const url=new URL("../icons/arrow-elbow-right-bold.svg?v=44b6815242b201f3764fbaae6a8f44b0a0ea5b985960fc773e6d63e8fea2d081",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
