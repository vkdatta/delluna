export const name="toast";
export const id="dl_dac1aa416deb453fba48";
export const url=new URL("../icons/T/toast.svg?v=596beb0feec77a49b4ae925582cd1d5d98fc241dd06738606c94371578b4fc3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
