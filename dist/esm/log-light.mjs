export const name="log-light";
export const id="dl_92c4d40372544b43a9f3";
export const url=new URL("../icons/log-light.svg?v=7defdbb3849fa792ac6d15b039320d250ecdf1b88edc4f5c284e85ed1797338e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
