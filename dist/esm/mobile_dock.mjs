export const name="mobile_dock";
export const id="dl_c6825db23edbdb7af654";
export const url=new URL("../icons/mobile_dock.svg?v=c367d0c139ca576284465123fc6a5b05013414345e409cf43a60523ae64967b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
