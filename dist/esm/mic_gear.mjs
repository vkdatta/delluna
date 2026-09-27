export const name="mic_gear";
export const id="dl_66a9f482d57c0e59e241";
export const url=new URL("../icons/mic_gear.svg?v=8a9f89734ba802edc6d6853c54cb13ad799fed98ecda852858e979ff28f92483",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
