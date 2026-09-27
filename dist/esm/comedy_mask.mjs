export const name="comedy_mask";
export const id="dl_9c5070c542f0900944fa";
export const url=new URL("../icons/comedy_mask.svg?v=f0e3ec9f9afe4007e2a39cff5857166a8f2b5a3c328e3737e813c6d7c5aff9ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
