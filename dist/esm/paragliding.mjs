export const name="paragliding";
export const id="dl_034c28d2a2ceeecaa1fa";
export const url=new URL("../icons/paragliding.svg?v=073996474b58c56b903adb30488378fb54a63858e264e6ddc4dae9575fee386c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
