export const name="label";
export const id="dl_629766f63222f40182a6";
export const url=new URL("../icons/label.svg?v=9efd4b4c76d2d2b960acee05ef55d288836079ccdbc59155aa397f928f840cac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
