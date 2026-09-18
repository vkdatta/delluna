export const name="stroke_full";
export const id="dl_1e419c7fd2dc418abccc";
export const url=new URL("../icons/S/stroke_full.svg?v=52107d8b06fcd941d41e0f623cce2501f6f62eb9f0b4c31352f3c6794bdc814e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
