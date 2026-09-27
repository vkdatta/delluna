export const name="caret-double-down-light";
export const id="dl_761ec8bd66d645a485cb";
export const url=new URL("../icons/caret-double-down-light.svg?v=b7ecc1d48b8de62419307ab1599678946f168677a8d11bf55d51c44113dc9880",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
