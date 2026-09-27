export const name="seal-percent-duotone";
export const id="dl_f6884642994ac799d822";
export const url=new URL("../icons/seal-percent-duotone.svg?v=a1a5ba1eb6b0b6c76c99aa5b5aa2c431da2a07fc96298faa4895c8eac103cac8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
