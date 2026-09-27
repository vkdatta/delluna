export const name="pentagram";
export const id="dl_6c606004cefc4d9092cb";
export const url=new URL("../icons/pentagram.svg?v=cbda1122c948e67cffb1d41379938bcd20fccdc64d878ac79015364365ab823a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
