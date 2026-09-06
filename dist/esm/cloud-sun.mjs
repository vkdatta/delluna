export const name="cloud-sun";
export const id="dl_57a0d53ad92547349820";
export const url=new URL("../icons/cloud-sun.svg?v=568d1629b9cff658ebcf9405bb6dc9af46b8fbc676ee4924690d96842e8bb324",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
