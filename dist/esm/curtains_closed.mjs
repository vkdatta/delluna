export const name="curtains_closed";
export const id="dl_7b754543371e384871b5";
export const url=new URL("../icons/curtains_closed.svg?v=e7415bf24a1f4d5ffe33ea63b3579a008f5cac4b793c86062bd2c82854c44ace",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
