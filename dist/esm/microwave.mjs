export const name="microwave";
export const id="dl_69afa3cd51054cba9505";
export const url=new URL("../icons/microwave.svg?v=84f5c10fc3f4d4fd0ae9593e91ea414aa6aae5ec0f2856628306a0d411be3ea8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
