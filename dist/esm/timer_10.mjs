export const name="timer_10";
export const id="dl_be33a6b4ec964cdfc97e";
export const url=new URL("../icons/timer_10.svg?v=7f7e074714e0765e0f270471dbcd362809474b657ec1fd7ccb3428a47de225ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
