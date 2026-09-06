export const name="google-play-logo-bold";
export const id="dl_f6a31e99e9b246c88e7f";
export const url=new URL("../icons/google-play-logo-bold.svg?v=189313fe4f072c38a394219ee709442afa52875f14418fc6b100f9400e9d7df8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
