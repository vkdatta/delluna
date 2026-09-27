export const name="microsoft-powerpoint-logo-bold";
export const id="dl_1daf2f53d77142749e93";
export const url=new URL("../icons/microsoft-powerpoint-logo-bold.svg?v=fa126b5d21beb3c65ffaf39c4432a146b949741e17c64d2b5a5764a7cf4c8cd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
