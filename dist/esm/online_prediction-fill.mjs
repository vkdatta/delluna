export const name="online_prediction-fill";
export const id="dl_c8bb9116d8a1be2fb326";
export const url=new URL("../icons/online_prediction-fill.svg?v=c4a364f25db7bf283a89e147c8d60f1c4739a5cc0a0fa5ba6d80e8c9deeaa602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
