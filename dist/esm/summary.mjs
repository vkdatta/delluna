export const name="summary";
export const id="dl_13b9aa389eff4e558600";
export const url=new URL("../icons/summary.svg?v=bd315d65c6829d20d0843743afe34436cdacfe214dd972b6843dab2a09a5ff8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
