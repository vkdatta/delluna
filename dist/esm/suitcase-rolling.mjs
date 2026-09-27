export const name="suitcase-rolling";
export const id="dl_d908aed3f065a18a7a55";
export const url=new URL("../icons/suitcase-rolling.svg?v=ac783d5c3117f297abd5f7ae294f1965b665a413d2383d05b0291e083f1bc283",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
