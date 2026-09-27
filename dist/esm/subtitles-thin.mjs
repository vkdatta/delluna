export const name="subtitles-thin";
export const id="dl_fea6d19464078a76b261";
export const url=new URL("../icons/subtitles-thin.svg?v=4b1f6897e297251189ffa9a9b864d2c4403a2b9078aa0551f3f229bb7fe6aa02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
