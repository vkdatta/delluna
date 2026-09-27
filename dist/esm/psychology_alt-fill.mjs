export const name="psychology_alt-fill";
export const id="dl_3c996c508df4b8205854";
export const url=new URL("../icons/psychology_alt-fill.svg?v=e24cb662d7237c705eb2508f5dfa4ff16d97d80a1306779381fe0336c7ef4fe7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
