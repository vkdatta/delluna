export const name="equals";
export const id="dl_9409f92a92fe46b9a146";
export const url=new URL("../icons/equals.svg?v=ab33ccc4111a5b5bda96b2840071db475746936be64bbfbf9660469d5e68bba6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
