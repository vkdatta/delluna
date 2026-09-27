export const name="lucid_2-list-chevrons-down-up";
export const id="dl_8c3f5a31b788449aa28e";
export const url=new URL("../icons/lucid_2-list-chevrons-down-up.svg?v=9bfddbd6666e758739ac64e21017f24f902618f3f4fc9ce43bd5a59bac39a801",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
