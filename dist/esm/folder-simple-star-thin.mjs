export const name="folder-simple-star-thin";
export const id="dl_021dcf7efc784f54bc6a";
export const url=new URL("../icons/folder-simple-star-thin.svg?v=87247aa13e8cc392abc2706b8d182cb5bcfdeaca9c8fa8ba6721680841a114f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
