export const name="watch_button_press";
export const id="dl_9db2e33d688289bc472a";
export const url=new URL("../icons/watch_button_press.svg?v=47345d69d80c2ce2eaaa29b6add22d1fded2154a0b09e8690b3b32b2cad420f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
