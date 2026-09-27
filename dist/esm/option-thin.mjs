export const name="option-thin";
export const id="dl_2a395c2c615b41f3ad2d";
export const url=new URL("../icons/option-thin.svg?v=75dabd950410bf74589d4f4729fd35595e5535302cb4ff4d1d17c2b3c211da07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
