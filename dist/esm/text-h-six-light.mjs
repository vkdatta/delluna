export const name="text-h-six-light";
export const id="dl_409a9864080639ce353b";
export const url=new URL("../icons/text-h-six-light.svg?v=581f6af41e83e5c9a69568d107ea3175896967a69c819fc7221124bbe28704b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
