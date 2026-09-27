export const name="arrow-square-down-light";
export const id="dl_c39699f5648c47698c3c";
export const url=new URL("../icons/arrow-square-down-light.svg?v=7372c391ad8bf26056650f634b3e38161645936798e054d46611eedaa8387cf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
