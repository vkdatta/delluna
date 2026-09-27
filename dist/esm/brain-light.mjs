export const name="brain-light";
export const id="dl_007ad488bb6e49149e8c";
export const url=new URL("../icons/brain-light.svg?v=5aaaef77027c08913f9fd901d7551d549ed2fdf0f31f758545eec0f4eab3a6da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
