export const name="lucid_2-grip-vertical";
export const id="dl_445c7ebdf017410a8128";
export const url=new URL("../icons/lucid_2-grip-vertical.svg?v=16541aafac5092911e450889a8ac9979ec499708e3d65b7b1c521041dbe7c146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
