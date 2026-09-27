export const name="user-switch-light";
export const id="dl_147c8e7dc4ab346f149b";
export const url=new URL("../icons/user-switch-light.svg?v=b5df4ffcc430563b4c6af28640ca1ff60bcdadb0a0379ec10c35137ad5c22979",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
