export const name="album-fill";
export const id="dl_adf4153207c5d7cdaf67";
export const url=new URL("../icons/album-fill.svg?v=6b5493d1ac4b22e38f8370dd7fa9690fcf1e56fb99ac6f2a2e4f6b51515be551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
