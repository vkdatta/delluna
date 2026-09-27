export const name="file_save_off";
export const id="dl_2e86ff0ff4b04596d811";
export const url=new URL("../icons/file_save_off.svg?v=eb84cf18ca83a3a6278e722be14d9b5cc5d97efc45fa1afd321defdbe3f79cdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
