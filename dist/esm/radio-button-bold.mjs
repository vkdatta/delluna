export const name="radio-button-bold";
export const id="dl_def8bc92ca3c4491aa80";
export const url=new URL("../icons/radio-button-bold.svg?v=0aa34cacf8452479ed5b24093558507e2f1b1f34d8315ba4c1a88803af5ed526",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
