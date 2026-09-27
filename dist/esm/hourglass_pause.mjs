export const name="hourglass_pause";
export const id="dl_14cf3d2b397fece1917c";
export const url=new URL("../icons/hourglass_pause.svg?v=053f60044f550a383c8be7b42bcd99e374ae9e40fd29dd99c9013eafaa59be3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
