export const name="play-pause-thin";
export const id="dl_ad657dde3a47460f8603";
export const url=new URL("../icons/play-pause-thin.svg?v=6a116dfbd903cb4372896f8748a2854c613b5b35f4da727cd53940b08da09c74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
