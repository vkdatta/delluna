export const name="voice_selection_off-fill";
export const id="dl_f26934dcfc122a5b61bd";
export const url=new URL("../icons/voice_selection_off-fill.svg?v=2fb12b3ef21f476ae9402853121fc195df7f0a39c66206b013ca5c95df24c251",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
