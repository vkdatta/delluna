export const name="cadence-fill";
export const id="dl_d940949cc31410b9ffb2";
export const url=new URL("../icons/cadence-fill.svg?v=3d279019f322471427bc5c508c549a7b6bea864eb14173867b02f67f8fcc71ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
