export const name="psychology_alt";
export const id="dl_d9b3a9efd98f09c5f204";
export const url=new URL("../icons/psychology_alt.svg?v=0cc5cb77e8888c31c243c6432f01fa16263bef3828c4293003b2c4e0fe42df6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
