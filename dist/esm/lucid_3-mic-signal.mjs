export const name="lucid_3-mic-signal";
export const id="dl_7f63ebb6b35141609374";
export const url=new URL("../icons/lucid_3-mic-signal.svg?v=84f40cd655d150effdeb08a4f72cf6df9bfe84509c36a2c902f58d9b45130f8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
