export const name="globe-simple";
export const id="dl_28f733bbcbcd473abbe4";
export const url=new URL("../icons/globe-simple.svg?v=1b57ed314eff3a776afee22a978d7bed1d946d590da216e14e38e844e56a917d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
