export const name="mode_fan";
export const id="dl_75d2a4f3743b73c442f3";
export const url=new URL("../icons/mode_fan.svg?v=d02246ef12d8b54f158f59ba2a9f5f9519b347fc52b4d0b863830d2e2938b660",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
