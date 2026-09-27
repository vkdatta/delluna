export const name="telegram-logo-fill";
export const id="dl_0e86427afb49bcb2ac03";
export const url=new URL("../icons/telegram-logo-fill.svg?v=a4a5e267b4722dac48266054af34f6abf6367cd333d107366b72e1cb0529bdf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
