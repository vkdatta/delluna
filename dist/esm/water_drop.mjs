export const name="water_drop";
export const id="dl_e04dff99624840820f22";
export const url=new URL("../icons/water_drop.svg?v=84c12e093251633ad57c1a252074e9999122a1099de3ff24b2eb12944efd792f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
