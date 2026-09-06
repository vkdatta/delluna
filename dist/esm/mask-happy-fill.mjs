export const name="mask-happy-fill";
export const id="dl_62980e6faa7b4b8ba7d8";
export const url=new URL("../icons/mask-happy-fill.svg?v=ddfd623edfa8ba83708ce677c6a50152fe4dd14b52b87da6a877edbe36adfa03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
