export const name="suitcase-simple-fill";
export const id="dl_9b6f7a57113a0c25e695";
export const url=new URL("../icons/suitcase-simple-fill.svg?v=19615628481c62d9f06cc3f6d47cfdf2d714d52e70abcfdd978e0640be294b34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
