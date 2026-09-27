export const name="lucid_3-play";
export const id="dl_57d57262702f4aa799ec";
export const url=new URL("../icons/lucid_3-play.svg?v=ec0c4562e6ef4fcb241e5d0690a479e28b43484f02dfcb79577fb78fec5e70ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
