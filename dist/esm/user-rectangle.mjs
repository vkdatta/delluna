export const name="user-rectangle";
export const id="dl_1fb51449f685e01587f0";
export const url=new URL("../icons/user-rectangle.svg?v=9297d32130671e46ac049d97f90abbbe11ca7933b1a4feefce113f7dcb4a73d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
