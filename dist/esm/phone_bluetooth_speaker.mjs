export const name="phone_bluetooth_speaker";
export const id="dl_8e0bebe19f951b7b8b37";
export const url=new URL("../icons/phone_bluetooth_speaker.svg?v=d0bcc6d85e419d0112c2143b3c844c2806925eb4599e0b076ae4f6ee983cc7e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
