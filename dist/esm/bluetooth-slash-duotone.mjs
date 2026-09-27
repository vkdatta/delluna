export const name="bluetooth-slash-duotone";
export const id="dl_63f68b7b3e26459384a6";
export const url=new URL("../icons/bluetooth-slash-duotone.svg?v=6e9206811b72b26873cf374418833dc65060eb3b6d8868dfd315127006f66dba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
