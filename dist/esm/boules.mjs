export const name="boules";
export const id="dl_d506e3d31d804698882a";
export const url=new URL("../icons/boules.svg?v=6b1607c52630d5632a4641715808c153b1622dab85ccf6ff75ce9cb284d836b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
