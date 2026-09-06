export const name="file-rs-fill";
export const id="dl_c44c69ad1af84af4ace6";
export const url=new URL("../icons/file-rs-fill.svg?v=67e20c07718801715742d40e7a1ced3bdeaad3580923c180aa0b2dcb4f115d26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
