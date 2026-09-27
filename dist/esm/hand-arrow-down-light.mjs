export const name="hand-arrow-down-light";
export const id="dl_c74e8cdc3e7649a3afee";
export const url=new URL("../icons/hand-arrow-down-light.svg?v=38c4276d10a6518abe14e86a4b16108f6d0ca4c87571a16302764d420f0d7700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
