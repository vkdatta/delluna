export const name="scroll-thin";
export const id="dl_5086d3ed7faa41898171";
export const url=new URL("../icons/S/scroll-thin.svg?v=a5dd4f52468d752da350147f70d98acea290cf9d568d670d02bf27a0f2032810",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
