export const name="computer-fill";
export const id="dl_87de502ecf112c4b8567";
export const url=new URL("../icons/computer-fill.svg?v=6930b58f173bb041bda6718a8f01dee5a66aa9b354fc4f045d9bc7acd7720637",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
