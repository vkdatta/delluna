export const name="capture";
export const id="dl_821a3f7ee9e973b364fe";
export const url=new URL("../icons/capture.svg?v=42ee3ce40ead94adfa44e13df6569522791906bc5d593693df7b21f71565dea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
