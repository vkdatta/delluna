export const name="perspective";
export const id="dl_1a87bd5760614e3f9a52";
export const url=new URL("../icons/perspective.svg?v=63ed8c3ad4a541d8e255a5e786272d2065a1af022721c849fa3179309d530beb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
