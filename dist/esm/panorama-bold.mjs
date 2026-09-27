export const name="panorama-bold";
export const id="dl_108f6512875248e58401";
export const url=new URL("../icons/panorama-bold.svg?v=2e31c4144eb155e79dbb2bbe6a490a732791d4d1112c967a8760a49d1614020a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
