export const name="yard-fill";
export const id="dl_0df4c0b3377b473baa90";
export const url=new URL("../icons/Y/yard-fill.svg?v=20a50f35b6d6f319e264f403898b65cf6a6568978166b51f5a25dfab00c5a39e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
