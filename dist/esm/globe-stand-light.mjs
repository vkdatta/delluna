export const name="globe-stand-light";
export const id="dl_94e859207ccf4746a795";
export const url=new URL("../icons/globe-stand-light.svg?v=647d38fabdbbf14dbdb99500e865881ea019f0007be7b322eb25c7e095af720a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
