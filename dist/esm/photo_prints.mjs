export const name="photo_prints";
export const id="dl_208f735f2da0d2a6949e";
export const url=new URL("../icons/photo_prints.svg?v=3c87ed49ac72d5961fbb7d8156969299b089de5412da8ad425dde7abbabda240",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
