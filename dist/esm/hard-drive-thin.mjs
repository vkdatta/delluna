export const name="hard-drive-thin";
export const id="dl_b828dce2a9734ea4ab10";
export const url=new URL("../icons/hard-drive-thin.svg?v=0a4b80e20f4c1066ee5ac7dac709948a22d664b02b59041cd125205d68676272",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
