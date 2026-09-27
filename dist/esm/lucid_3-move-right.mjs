export const name="lucid_3-move-right";
export const id="dl_7ef437b3ae824d16886e";
export const url=new URL("../icons/lucid_3-move-right.svg?v=87f8b4f6707426d83c108a87e8f32172fbfcdd9d8ed0eb0071aba55345a2d912",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
