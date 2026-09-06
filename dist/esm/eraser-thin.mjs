export const name="eraser-thin";
export const id="dl_061a942803fe47078461";
export const url=new URL("../icons/eraser-thin.svg?v=d9608107b935703b1fcb727b1cd24ab47ba6e06ca55b8a9324f8b73a9e909f7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
