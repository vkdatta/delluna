export const name="8k_plus";
export const id="dl_51a1addff332d57f869a";
export const url=new URL("../icons/8k_plus.svg?v=374ebf8cac1c4691f843d64dd4959604a583968d08d1bb5351aae74f668fb46c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
