export const name="house-line-fill";
export const id="dl_8573691a8e7140979bcd";
export const url=new URL("../icons/house-line-fill.svg?v=520f9269e6817839d298f1ceb2caf052f865f1f654134d78152f95ee73161682",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
