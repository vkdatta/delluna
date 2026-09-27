export const name="speaker-hifi-fill";
export const id="dl_85f8757bbb5646fc57cc";
export const url=new URL("../icons/speaker-hifi-fill.svg?v=1ef366e009ec068a8394c20aab88f8faf682a8d69aae012dadd5e5cb2441ec59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
