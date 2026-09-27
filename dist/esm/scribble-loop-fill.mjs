export const name="scribble-loop-fill";
export const id="dl_82d61b96838ecf268892";
export const url=new URL("../icons/scribble-loop-fill.svg?v=7570754fbc9e4d50a2c52d5d3ab8789917fd8f694adb9e18dc015c806806e41e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
