export const name="selection";
export const id="dl_8f63831bf8274ac59a7b";
export const url=new URL("../icons/S/selection.svg?v=5fff68fdc60d81f1855302416481dc69fe9f0abfbb353d3bc43f2c24150ab8d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
