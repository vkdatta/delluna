export const name="caret-circle-double-up-light";
export const id="dl_85ff42e367614a658377";
export const url=new URL("../icons/caret-circle-double-up-light.svg?v=cecfcb6289273bf1fe11d0377188b1a58bf7a5c7a99e57cfb7646fc06ce744da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
