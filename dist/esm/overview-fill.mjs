export const name="overview-fill";
export const id="dl_78d38c86d81e3fc563cd";
export const url=new URL("../icons/overview-fill.svg?v=55070da78b1ff454730e8e795bb8fde492421602618146faf4cf808cb6e79a7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
