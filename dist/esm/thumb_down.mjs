export const name="thumb_down";
export const id="dl_00b33fc2397caf3ae98b";
export const url=new URL("../icons/thumb_down.svg?v=5c3aae9b11fd4b8e7f3e0e137ca25c7db6f102da2f67beabc5b877ed14cf6dea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
