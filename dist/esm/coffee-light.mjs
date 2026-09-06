export const name="coffee-light";
export const id="dl_9e013231c05941ba9a07";
export const url=new URL("../icons/coffee-light.svg?v=196ff633cf208ea58a87ebaf8906dc723877b34204ba742394c0b48b27572177",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
