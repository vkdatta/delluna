export const name="keyboard_option_key-fill";
export const id="dl_9d2ef6aaca70a162a60d";
export const url=new URL("../icons/keyboard_option_key-fill.svg?v=b690ede7d66826ed82ae19ddc8ad0a3238e66a63bb23d792324f54e429bda750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
