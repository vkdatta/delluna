export const name="shovel-light";
export const id="dl_c2d05044974cc513e1db";
export const url=new URL("../icons/shovel-light.svg?v=a18680752431af1e6c5fd855dac0e89aae8f086ed0366cd613ee3f2c85a6b213",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
