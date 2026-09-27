export const name="format_image_break_right";
export const id="dl_7d5a12a2ba9cb04abc2c";
export const url=new URL("../icons/format_image_break_right.svg?v=a6228ac827723ffd660eefb281adc616d2b46e84cd0f265a88673289572d7c96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
