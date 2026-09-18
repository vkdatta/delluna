export const name="diamond_shine";
export const id="dl_730cb65c066f4e60b40a";
export const url=new URL("../icons/diamond_shine.svg?v=222c47c4a3e5e510f3840257649b000189f7c8929698f2f5e0a981c91723647f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
