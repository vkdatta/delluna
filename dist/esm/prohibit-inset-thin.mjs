export const name="prohibit-inset-thin";
export const id="dl_62084d7bb97f4aa9bcea";
export const url=new URL("../icons/prohibit-inset-thin.svg?v=cbc5ee40f5722c1b18ce95d7281956e9b51f2b80dcf56e371baac9c3382c1e3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
