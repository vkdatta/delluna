export const name="beer-stein-duotone";
export const id="dl_6bcbe20f702d419e97a4";
export const url=new URL("../icons/beer-stein-duotone.svg?v=c75ec04da432a90f39332903e9fae7d9738a8ef91c75a6e26a2338056e3cce34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
