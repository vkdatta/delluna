export const name="link";
export const id="dl_2e34914f4c1a9cf9c705";
export const url=new URL("../icons/link.svg?v=ee5d3d082ab4f3307b6e74938c6842d582031a18d179377b8c3ee2f3b6b1db3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
