export const name="captions";
export const id="dl_31ec37c7ed8946698794";
export const url=new URL("../icons/captions.svg?v=6397d9517b15a719c26f07cc4161dc18f773190d28a415f1f930acb10972fa24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
