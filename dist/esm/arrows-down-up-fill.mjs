export const name="arrows-down-up-fill";
export const id="dl_7267673964e74953b1cb";
export const url=new URL("../icons/arrows-down-up-fill.svg?v=40d896a19cc17167e2755c71477f1b4a89f106a11d6a5f29b0ef79770f310739",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
