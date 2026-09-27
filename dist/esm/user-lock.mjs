export const name="user-lock";
export const id="dl_dc5fa1bb7321412089c2";
export const url=new URL("../icons/user-lock.svg?v=a9de518acc7adc753d680f1b51fb19f4149684974d02406810a54b653c53c040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
