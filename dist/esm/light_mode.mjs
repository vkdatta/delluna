export const name="light_mode";
export const id="dl_2dd600aafe731cdd8c21";
export const url=new URL("../icons/light_mode.svg?v=1e16b3295124d2d9515f861a6b55da5715583f6778d3bf886fff9936b858645a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
