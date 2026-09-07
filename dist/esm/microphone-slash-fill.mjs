export const name="microphone-slash-fill";
export const id="dl_7ef5816d391143d3bb06";
export const url=new URL("../icons/microphone-slash-fill.svg?v=6970ccb81d74ffe2165904bc4ed09e0dc738c5d4930192426afd24a5457a2202",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
