export const name="file-code-duotone";
export const id="dl_adb18175063444e8a910";
export const url=new URL("../icons/file-code-duotone.svg?v=85e1b40f852d89c9344785b8d80a07c2a00803f48bb02ad988d680eb733c5de4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
