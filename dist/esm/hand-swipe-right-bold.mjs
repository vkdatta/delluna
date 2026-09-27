export const name="hand-swipe-right-bold";
export const id="dl_2669ba77543b43babf54";
export const url=new URL("../icons/hand-swipe-right-bold.svg?v=e4f9a485d8f5cbb2815c1cf2b7f0c8a0b27cd1915ae5fd57074daf6f6dbc1120",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
