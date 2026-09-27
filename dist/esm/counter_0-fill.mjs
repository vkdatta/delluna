export const name="counter_0-fill";
export const id="dl_34939da6c38ffcbf8154";
export const url=new URL("../icons/counter_0-fill.svg?v=ed2c77c8c85622b621cf6a6f0686e4f825ce3b64c44dc2b3cc097c6c653175d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
