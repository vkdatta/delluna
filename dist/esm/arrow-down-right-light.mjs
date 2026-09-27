export const name="arrow-down-right-light";
export const id="dl_60093679caba4530b684";
export const url=new URL("../icons/arrow-down-right-light.svg?v=6f2cefd2bae6c653c72fb0841fd8a88c5da2c56b9496e3f63fc9626fc73a383c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
