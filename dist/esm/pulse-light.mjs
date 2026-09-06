export const name="pulse-light";
export const id="dl_e1e7a3a679294a3f836a";
export const url=new URL("../icons/pulse-light.svg?v=fb5bd8fbe68318fe69d4acb810ce4fb72290ec839036b80bc1333c8702cc2498",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
