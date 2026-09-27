export const name="bell-light";
export const id="dl_4dd3841f26ef47c3b442";
export const url=new URL("../icons/bell-light.svg?v=7eb99683b959088c93d9dd32a9aabca0b1da27ff9a651f3331b32320ca6ce6a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
