export const name="monitor-arrow-up-light";
export const id="dl_bfb33fc6c8a7447dab5e";
export const url=new URL("../icons/monitor-arrow-up-light.svg?v=3fe36d6c1cee5671dfd9eafbd5f85efafaea1ab0bb31380b6a97b5b7131cb2f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
