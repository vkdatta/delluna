export const name="mouse-middle-click-thin";
export const id="dl_1b33f41c7ede4604adcb";
export const url=new URL("../icons/mouse-middle-click-thin.svg?v=525699c9812079493542d40aea6f860f7857a9991ac9318360df29f395fe9064",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
