export const name="presentation-light";
export const id="dl_175552113af34bcf8339";
export const url=new URL("../icons/presentation-light.svg?v=388b18f97b2c658e8e8fe715ec16e61c9260a0403f0cd03f3bde395ca86293b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
