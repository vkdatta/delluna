export const name="hand-grabbing-fill";
export const id="dl_8ebc859e5e6b47c0a4ad";
export const url=new URL("../icons/hand-grabbing-fill.svg?v=53f68746976728bafcbeaee7f4ff775a83f5536695a750110f5353c261574c5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
