export const name="wave-triangle-light";
export const id="dl_cfb4402812433398c0d1";
export const url=new URL("../icons/wave-triangle-light.svg?v=573920ad886cfcef0a56d5d8a52a45c4a20131c856d193351deb232993d7608b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
