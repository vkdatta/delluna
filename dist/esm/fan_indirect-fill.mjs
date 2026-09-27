export const name="fan_indirect-fill";
export const id="dl_1976ce97f85e233e89b5";
export const url=new URL("../icons/fan_indirect-fill.svg?v=2af686cfb64ddf6b296ebee483b9a7fdad3bbbf9a09061320fd0dd832b959dbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
