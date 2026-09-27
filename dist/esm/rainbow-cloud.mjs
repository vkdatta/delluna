export const name="rainbow-cloud";
export const id="dl_a9ef77cb739a4c9ab512";
export const url=new URL("../icons/rainbow-cloud.svg?v=37cfc867e924017ba40474b8434784c6bf9f824f12415232e461a80203e9d43a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
