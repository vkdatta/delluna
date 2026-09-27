export const name="align_horizontal_center";
export const id="dl_7fec76a2bc8730a217f4";
export const url=new URL("../icons/align_horizontal_center.svg?v=1bb0a312bd827a8316cca73ba937762b1fcc461aa42f25e6a2c559b340ba18a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
