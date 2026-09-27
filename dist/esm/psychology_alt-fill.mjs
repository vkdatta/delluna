export const name="psychology_alt-fill";
export const id="dl_7fe08fd8a72a6a155dd5";
export const url=new URL("../icons/psychology_alt-fill.svg?v=4a9047af7f3b71adcfb0ee1a45c42d62e92f85d258fd92eeee4656637ba0aac9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
