export const name="speech_to_text-fill";
export const id="dl_2ba4c5ea25bb3e219c28";
export const url=new URL("../icons/speech_to_text-fill.svg?v=2b4b97a3c97a5ecd75ffae756c3209e7c4c0ceb0355317b12012907bc002b614",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
