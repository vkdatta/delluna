export const name="microphone-fill";
export const id="dl_11f609c34d3049dfafb9";
export const url=new URL("../icons/microphone-fill.svg?v=cd8446012357f05a70679ecc792402aa6e49f1fdc820b04035a97b213a2f17a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
