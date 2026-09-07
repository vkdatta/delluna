export const name="x-circle";
export const id="dl_b71910b0325b4d849194";
export const url=new URL("../icons/X/x-circle.svg?v=cff9cacbd83ab11a01585dc63af07d289479bdb332708b0de2ad4c953f67d223",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
