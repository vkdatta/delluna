export const name="mobile_speaker";
export const id="dl_20e2825aeedf7308e0b1";
export const url=new URL("../icons/mobile_speaker.svg?v=024a9b352248a6f2f8ddf0b718a5de062dd906b88ef6f9eb34b3b0ac3aec6295",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
