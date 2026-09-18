export const name="tv_displays-fill";
export const id="dl_3f6791cd05cd4774a809";
export const url=new URL("../icons/tv_displays-fill.svg?v=66fb1de7b3b7d39a683df9a0d716c9c23e2b633ae21c6c13bd721d5f172c74d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
