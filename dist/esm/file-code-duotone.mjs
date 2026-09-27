export const name="file-code-duotone";
export const id="dl_adb18175063444e8a910";
export const url=new URL("../icons/file-code-duotone.svg?v=cb0219be4e459dd9064f436a139b9ab619ebf27736e3b233755dafd7eeec5243",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
