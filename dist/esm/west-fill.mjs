export const name="west-fill";
export const id="dl_75e9b31c67cf4f1a90b8";
export const url=new URL("../icons/W/west-fill.svg?v=76e14a1ca89b96b471aa31c1fce7352b0c82a179bfcf0a71342c275f8a868c5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
