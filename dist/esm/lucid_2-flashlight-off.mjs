export const name="lucid_2-flashlight-off";
export const id="dl_780c3a89999f4161b138";
export const url=new URL("../icons/lucid_2-flashlight-off.svg?v=d544cb6c4aa8a415faffc8f2758ec510c6983736a39a0c43e815741c258a7c7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
