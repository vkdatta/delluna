export const name="window_closed";
export const id="dl_14a2d7cb17b941c88751";
export const url=new URL("../icons/window_closed.svg?v=37369e1e2203a3d4ee56ab0967af538c8cfe41dd46ed261d5c455bcea7f55a0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
