export const name="screenshot_tablet";
export const id="dl_c82cc74e18cc3748da1f";
export const url=new URL("../icons/screenshot_tablet.svg?v=3ca8a0b81339472c205d893693f9e888d61e869dd40ac93176cabc1c50365b4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
