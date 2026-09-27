export const name="question-mark-bold";
export const id="dl_f5bc536a2c90420a91d8";
export const url=new URL("../icons/question-mark-bold.svg?v=391e62a4b109133a96d00603ed620358bd140d48622a81a0068ba1edf83de1db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
