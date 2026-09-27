export const name="intersect-thin";
export const id="dl_ae52b1a1444c4215b674";
export const url=new URL("../icons/intersect-thin.svg?v=c21be5c586cab516822ac4457995a93d891f0f3c0b1569bbb038b445f468f490",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
