export const name="detector";
export const id="dl_102202aac8132fec7d88";
export const url=new URL("../icons/detector.svg?v=7167726268262fa0736575d78cbfc30c0a166f533639f6cee530f0946b9cf8e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
