export const name="lightbulb";
export const id="dl_66440e734ace4221b8eb";
export const url=new URL("../icons/lightbulb.svg?v=a4b8f89b9b99baf1c64c6477da5ee1d68cc0b25b3b4862c0d55664f95a354e9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
