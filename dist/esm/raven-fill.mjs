export const name="raven-fill";
export const id="dl_39be48a22bbb17ab8598";
export const url=new URL("../icons/raven-fill.svg?v=459199adb98e1a8bfea9299f8050f3de67ca4a0166a895e2a59fc8d821ebf4ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
