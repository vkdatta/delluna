export const name="chromecast_device";
export const id="dl_fb57acf0bf0bef2508b9";
export const url=new URL("../icons/chromecast_device.svg?v=8a67d739bd443a7db29299a1c35ab988030d057e423a09f4c96211a28beccae4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
