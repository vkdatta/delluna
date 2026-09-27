export const name="arch-dismiss";
export const id="dl_8f52e3dd65645e34adbf";
export const url=new URL("../icons/arch-dismiss.svg?v=9355042f49a36e18347df7081bafb4d300bf3ad3349db6ff9d48751dbd17afd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
