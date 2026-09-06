export const name="arrow-elbow-right-duotone";
export const id="dl_ec5ee90e76a946129fe4";
export const url=new URL("../icons/arrow-elbow-right-duotone.svg?v=4aece4827532029898c143030a7eac6e83e7b9a85e33741f1110749b455b000a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
