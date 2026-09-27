export const name="mail_off-fill";
export const id="dl_369decadfaf71c218d8b";
export const url=new URL("../icons/mail_off-fill.svg?v=f96639a6fea0e4696ea5521d13d795a460e097068b36065e80e3239b8c120746",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
