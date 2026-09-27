export const name="train-track";
export const id="dl_07d631d9d8404feba620";
export const url=new URL("../icons/train-track.svg?v=985f87c37f8427238ba393892a8dd9b8afcc100db57521d30ef4651f53039858",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
