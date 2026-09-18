export const name="stylus";
export const id="dl_92fc8bbf4d9e49609914";
export const url=new URL("../icons/S/stylus.svg?v=a2b836a7b77f12af27f816bfba295d2e6e0425115909f53310ee4d5d74127de9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
