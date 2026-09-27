export const name="vignette-thin";
export const id="dl_55cbcd08fea93e28a6a8";
export const url=new URL("../icons/vignette-thin.svg?v=9b9d5cf32cf814fb0c3bc6f48471898e5a642603d2fbec488a4ac7b990e8a27e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
