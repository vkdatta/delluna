export const name="clock-counter-clockwise";
export const id="dl_44f2ff7fd1ec47c2838a";
export const url=new URL("../icons/clock-counter-clockwise.svg?v=06aa1cb0d2664789232f4addb1c5932c8ce14e48465c8e8fb09a651b619b44e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
