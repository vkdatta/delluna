export const name="lucid_3-mouse-right";
export const id="dl_f8345c58a23f4edaa000";
export const url=new URL("../icons/lucid_3-mouse-right.svg?v=91d53aa7195af8d40d6f323b99b2b0eb9a64c9ada6ddbb7f7a5ab889e62722c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
