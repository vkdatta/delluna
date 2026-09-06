export const name="calendar-check";
export const id="dl_368550e72cb04fa9babe";
export const url=new URL("../icons/calendar-check.svg?v=94a43416ea1c0db010e860b1b63a668834c99629c4a0b2ea3a4179876e60f622",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
