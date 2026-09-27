export const name="keyboard_option_key-fill";
export const id="dl_30ceef5c615bb3f5a5c2";
export const url=new URL("../icons/keyboard_option_key-fill.svg?v=7c06fb085463e74cd1587564dc583506e5eb4a2514204e0d0fdeb43a1a06a9b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
