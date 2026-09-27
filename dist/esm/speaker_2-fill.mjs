export const name="speaker_2-fill";
export const id="dl_7ee00aad4742b53f8f97";
export const url=new URL("../icons/speaker_2-fill.svg?v=7e027d8e78b16795cc77a15020904253a7678f3fb91ed7583ddf1d4bfde4a46e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
