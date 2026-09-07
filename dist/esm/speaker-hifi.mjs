export const name="speaker-hifi";
export const id="dl_32a55e904a454b638b3c";
export const url=new URL("../icons/S/speaker-hifi.svg?v=582ba467cd79b96d3c4baae867223ae906c64c46f71e2f5268f89a62bf934427",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
