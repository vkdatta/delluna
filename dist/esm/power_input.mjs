export const name="power_input";
export const id="dl_cd8f0b9b7e6133ebb9c4";
export const url=new URL("../icons/power_input.svg?v=32cac7b7614f4d78035c1fbfcbd20cf568e353e91170fa5d5e6356708166ecd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
