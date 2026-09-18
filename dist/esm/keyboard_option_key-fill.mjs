export const name="keyboard_option_key-fill";
export const id="dl_736b1677641e4669961c";
export const url=new URL("../icons/keyboard_option_key-fill.svg?v=84b045d8f26457e67d287bd3365bff84f0bf2a72815afdc57b19f52f644f89d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
