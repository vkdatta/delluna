export const name="sticker-fill";
export const id="dl_2e331ca0b8f84931a993";
export const url=new URL("../icons/S/sticker-fill.svg?v=7b82c8037cc61e8c740821df59bb1df622ad83435f251383974e6c04285e83bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
