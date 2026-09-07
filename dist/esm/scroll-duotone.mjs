export const name="scroll-duotone";
export const id="dl_4ad391fe5f8f4a60814e";
export const url=new URL("../icons/S/scroll-duotone.svg?v=6b65a318c25161e00f81fcef96b72c6ff4333fb44cf222c796c1e044a58c8d09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
