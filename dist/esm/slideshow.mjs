export const name="slideshow";
export const id="dl_926a82686e151d3226b0";
export const url=new URL("../icons/slideshow.svg?v=2f12f9316eced2b074f80fdcb43c3c1b0ab819c322b7663e7c67cbfafc25940d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
