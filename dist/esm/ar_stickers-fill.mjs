export const name="ar_stickers-fill";
export const id="dl_5b7445655c536b1157a9";
export const url=new URL("../icons/ar_stickers-fill.svg?v=a0d5fb61668a0a6589864790d29972004f7c2e88d169a979c850005939e81049",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
