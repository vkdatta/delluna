export const name="handbag-thin";
export const id="dl_91036a2947d0470fafeb";
export const url=new URL("../icons/handbag-thin.svg?v=c52adc87aa34b10b96bd53f3c557017bf475b7db169b21181551b132c0eeabed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
