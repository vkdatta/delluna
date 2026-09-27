export const name="receipt_long_off";
export const id="dl_e89acb1976362bc9f83f";
export const url=new URL("../icons/receipt_long_off.svg?v=91fd9a474c89e9c83c8af13d8cb9990e831b0e6d17c60646765e6d025f6e6f15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
