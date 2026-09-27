export const name="lucid_3-metronome";
export const id="dl_9ca13450156a42eb82a9";
export const url=new URL("../icons/lucid_3-metronome.svg?v=490e67e9084d058f81d36fe4e57793e43cab0922b5f3daed7bf8bdaa68b8b411",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
