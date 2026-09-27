export const name="speaker-simple-x-fill";
export const id="dl_637783a911968448dc7e";
export const url=new URL("../icons/speaker-simple-x-fill.svg?v=c03a19a0e841f8546c74fc1d47e01c13b2c53d96cdede1b34731c68da517db01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
