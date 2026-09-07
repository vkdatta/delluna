export const name="tractor-fill";
export const id="dl_3b65cc9219884990b4e5";
export const url=new URL("../icons/T/tractor-fill.svg?v=1acf32116d30a2d6d860180b62e1f1f882c5c1ddc5e36689435e9b3051f6dc7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
