export const name="file-x-thin";
export const id="dl_5aa122091b114a75bb52";
export const url=new URL("../icons/file-x-thin.svg?v=5cf3776ee32ddc7667a5d43d6ca9358fef5428966de78c5cf83de326ab965c37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
