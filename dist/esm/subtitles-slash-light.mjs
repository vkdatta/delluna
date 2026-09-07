export const name="subtitles-slash-light";
export const id="dl_7cfe6b1254b84b189c03";
export const url=new URL("../icons/S/subtitles-slash-light.svg?v=c926222ed81d8580d5ccbf765b90c65d6836716ca5bb66c966cf133da2b8f2ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
