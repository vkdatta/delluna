export const name="arrow-down-left-fill";
export const id="dl_9656e0b411684a17be08";
export const url=new URL("../icons/arrow-down-left-fill.svg?v=37f2775a4fd8ca4a239222163ee31adcb3c806d8bb4235ac78f8f088b7f3d208",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
