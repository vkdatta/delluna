export const name="arrow-u-left-up-bold";
export const id="dl_8836de9fad924f2bbc69";
export const url=new URL("../icons/arrow-u-left-up-bold.svg?v=151d2d66433130efcb3129777b165301c605d5f1117b732ec0e6e55a2e4f912a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
