export const name="tipi-light";
export const id="dl_fd324fc5db4b46748299";
export const url=new URL("../icons/T/tipi-light.svg?v=c68fa917482058cb64d6dfea65bb397e2c9d52b3f8810ca6e21862095223bbc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
