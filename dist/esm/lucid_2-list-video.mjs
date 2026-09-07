export const name="lucid_2-list-video";
export const id="dl_e4df14f46a404a97957e";
export const url=new URL("../icons/lucid_2-list-video.svg?v=896e01e4e84a35c437728948d078de28e3b11e0ab469630029c7c48ab345de7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
