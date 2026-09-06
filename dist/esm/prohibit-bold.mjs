export const name="prohibit-bold";
export const id="dl_c91e2970976f4db780c2";
export const url=new URL("../icons/prohibit-bold.svg?v=fba9bed853d84c9fc94860cb3b1504a2077ffa2da2cb99cc9e7e943636097285",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
