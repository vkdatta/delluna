export const name="instant_mix-fill";
export const id="dl_3ff7ffaee0f538a27c8c";
export const url=new URL("../icons/instant_mix-fill.svg?v=daf92ba74ed7b7be5bf6fd8e2c83b1dcc6367040008362ee24dd25abee0b7fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
