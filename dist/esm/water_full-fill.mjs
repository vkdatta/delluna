export const name="water_full-fill";
export const id="dl_cf9f9adb74f6e4be4c4b";
export const url=new URL("../icons/water_full-fill.svg?v=8c2232806aeb2d6668fd2a98a35fcf3ce0f218846f686d472bba11fb363dcc66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
