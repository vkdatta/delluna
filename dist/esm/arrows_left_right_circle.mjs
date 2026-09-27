export const name="arrows_left_right_circle";
export const id="dl_49c680c2bf34cdecde21";
export const url=new URL("../icons/arrows_left_right_circle.svg?v=fed147b9b99bd512dd94e929955c1328ddd8a45b2cf6dbba762d84f9aaa4adff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
