export const name="text-underline-duotone";
export const id="dl_d086bc63d20c7de06716";
export const url=new URL("../icons/text-underline-duotone.svg?v=355b42cf12922b5eec98a310c2303b91e33ca599f1d50861f1893b5c75cd7d55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
