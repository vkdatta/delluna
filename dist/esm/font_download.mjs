export const name="font_download";
export const id="dl_1071c9e87cf7e822c795";
export const url=new URL("../icons/font_download.svg?v=3bfc35a31238fdbb21bbb3a545cf3062709447260eb4fbf37a11722bb00e2bf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
