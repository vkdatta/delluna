export const name="arrow-elbow-up-left";
export const id="dl_91ea48f1e1cf4ea1981c";
export const url=new URL("../icons/arrow-elbow-up-left.svg?v=61adbfd6db8bdcbc1cd7926712d9d01aafda911fd06d1077ca2d9e1fb48b328e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
