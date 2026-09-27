export const name="stop-duotone";
export const id="dl_e70dc802e80a5a90e4d3";
export const url=new URL("../icons/stop-duotone.svg?v=2ee8390b336dcd0ec2bcadf5220fd5c5bf0be3789c176e52795900dea462f2c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
