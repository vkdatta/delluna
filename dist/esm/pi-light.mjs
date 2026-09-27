export const name="pi-light";
export const id="dl_49e8f48661d14570b497";
export const url=new URL("../icons/pi-light.svg?v=d4e57b44316a65a5a9ac701c96088fde1bf43385858e1925c9e695539759fd00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
