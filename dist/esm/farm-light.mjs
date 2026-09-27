export const name="farm-light";
export const id="dl_799b84e4d7a9499998f8";
export const url=new URL("../icons/farm-light.svg?v=619b6774548c7214d22c2dc5d355dd6d318e5b27952c6408bbca1c3fc16f8a1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
