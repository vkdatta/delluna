export const name="traffic-sign-light";
export const id="dl_e4c69669310dedff9372";
export const url=new URL("../icons/traffic-sign-light.svg?v=357d1bbf60bc3ed5b98914a02ce14188fda51214bfe8617d913fb9f43ef49f4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
