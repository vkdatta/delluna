export const name="trash-light";
export const id="dl_c8a250adcf13d28f4fff";
export const url=new URL("../icons/trash-light.svg?v=2f1021169dfc9119a2a79670aef7118f24d457499594da2bd2bfe65e7c9d066c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
