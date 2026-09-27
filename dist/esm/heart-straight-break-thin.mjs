export const name="heart-straight-break-thin";
export const id="dl_a55935ab37844341a6f1";
export const url=new URL("../icons/heart-straight-break-thin.svg?v=397679563aa81d49c7d43a2f4415532e0c73ba6d2131ba743ff1f431592dca4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
