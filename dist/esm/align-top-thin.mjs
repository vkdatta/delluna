export const name="align-top-thin";
export const id="dl_f39144a8acc3404dac04";
export const url=new URL("../icons/align-top-thin.svg?v=1253fc796ebaa6297746406f35ecc37c2e43126dbd537d766bb139ead970ec5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
