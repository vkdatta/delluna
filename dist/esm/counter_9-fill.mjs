export const name="counter_9-fill";
export const id="dl_2bed0f69c197d9f060c9";
export const url=new URL("../icons/counter_9-fill.svg?v=66477cef9962810cf563751a640afe652ccc22a16aa09eb57f28c16778f8b5f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
