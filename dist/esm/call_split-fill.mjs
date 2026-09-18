export const name="call_split-fill";
export const id="dl_9342f2d83bc74908aa1b";
export const url=new URL("../icons/call_split-fill.svg?v=b83babd17bf0fbe2a0bd5e3330417fc0cc83ebaa632ada12f8dedb61802bdd5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
