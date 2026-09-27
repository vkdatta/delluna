export const name="hard-drives-fill";
export const id="dl_79dca56a59484dd3afa0";
export const url=new URL("../icons/hard-drives-fill.svg?v=2a41ed96baecea2f0a0dedce560add98bafd398749f477a29d1dda4f34a335b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
