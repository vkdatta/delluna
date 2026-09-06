export const name="medal-duotone";
export const id="dl_464ca69a2b7e47fbab81";
export const url=new URL("../icons/medal-duotone.svg?v=df7265d7a889dd2016051d1c508ca9d10f49ccba7bd7236c1bbf3b34febde58e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
