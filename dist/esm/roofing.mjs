export const name="roofing";
export const id="dl_1e00be1e1b4964de6f22";
export const url=new URL("../icons/roofing.svg?v=800a50fde4b0f39fb139921b9dd7c22ac73df9378957d27ea0c3c497da399569",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
