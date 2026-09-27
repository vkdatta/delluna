export const name="arrows-vertical-thin";
export const id="dl_5c279a302719432bbeb2";
export const url=new URL("../icons/arrows-vertical-thin.svg?v=7c422596a1aa5270eec1ce5562e134be99930e86dc03906f005cd65629956c26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
