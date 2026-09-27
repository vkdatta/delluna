export const name="arrow-counter-clockwise-thin";
export const id="dl_0aa7794e7f2744c88d4b";
export const url=new URL("../icons/arrow-counter-clockwise-thin.svg?v=41262729ef616e5067df0956629517d1713319a31fac9f656f70353ab6045d61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
