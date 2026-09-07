export const name="heart-straight-break-duotone";
export const id="dl_d81f23baa5c5452ab081";
export const url=new URL("../icons/heart-straight-break-duotone.svg?v=189914f00d43d3668b6d7bd9b4432d4cd61d6a26506b369480d3e36b940870c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
