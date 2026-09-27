export const name="sigma";
export const id="dl_9d7c59380a794d368a39";
export const url=new URL("../icons/sigma.svg?v=fa36d4ad47e8688612a47b2c6fa50d7fe3f42a610eb3913091996ad231c3a879",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
