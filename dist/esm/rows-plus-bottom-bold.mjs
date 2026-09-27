export const name="rows-plus-bottom-bold";
export const id="dl_afd3490119244fce8f7b";
export const url=new URL("../icons/rows-plus-bottom-bold.svg?v=a55888b9c6e1575db9d13dd885307bd6e1506e2eb33150202e7775203850aa18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
