export const name="lucid_3-message-circle-off";
export const id="dl_1bf282505c1d4baaa4e8";
export const url=new URL("../icons/lucid_3-message-circle-off.svg?v=8c4bc408687cbd0fdcda0daa203641579b5a9abc037c65981348d25c345bf6a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
