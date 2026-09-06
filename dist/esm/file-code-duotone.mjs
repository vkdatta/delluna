export const name="file-code-duotone";
export const id="dl_adb18175063444e8a910";
export const url=new URL("../icons/file-code-duotone.svg?v=730c27ca9c598f83d7a4bd07fb6b2c18e1930e214fdb70573d4175a9a79a92d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
