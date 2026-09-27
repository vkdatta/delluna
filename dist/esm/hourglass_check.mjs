export const name="hourglass_check";
export const id="dl_698569bc69b6b1413821";
export const url=new URL("../icons/hourglass_check.svg?v=6cd1912b0d4e92ea936779c973802394489c26d23c8aa045d5f5ca47accfdb1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
