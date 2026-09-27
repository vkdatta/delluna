export const name="boules-fill";
export const id="dl_dc16d9cf9315429386ca";
export const url=new URL("../icons/boules-fill.svg?v=a580fc3f0e42d2b653a8b76aef315f5c173ef2b24f6fe4e374dc62c98925c014",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
