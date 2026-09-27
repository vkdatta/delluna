export const name="borg-fill";
export const id="dl_926fcceb268757c936d6";
export const url=new URL("../icons/borg-fill.svg?v=25f6dffa2dcad85084ad2f18ab078fa218af68d81e6126be19ad7fde07b763c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
