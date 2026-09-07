export const name="soccer-ball-fill";
export const id="dl_d4e9dc316b5143019fe3";
export const url=new URL("../icons/S/soccer-ball-fill.svg?v=0be7b183aec422483bbac41794eccd7411b9b00efb0dca98912a43a4192e6a2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
