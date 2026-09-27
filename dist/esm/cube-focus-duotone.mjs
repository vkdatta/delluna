export const name="cube-focus-duotone";
export const id="dl_b3eefedd5fed48b28a90";
export const url=new URL("../icons/cube-focus-duotone.svg?v=5416f616c23b2afb1d819553ed6ed1f0f5050ee8464dd4f9220e33adcca428a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
