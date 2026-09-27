export const name="question-mark";
export const id="dl_8a32c35432174493b936";
export const url=new URL("../icons/question-mark.svg?v=90e3d68509fb9944864368e7ccb428adbac7d787617a9da35d0d789c15f3d23f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
