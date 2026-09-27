export const name="subtitles-light";
export const id="dl_824acca0b916e5812445";
export const url=new URL("../icons/subtitles-light.svg?v=43cad36c76d3af73dc3a0eb6e003524bf289a769b81ef11d02faf1fb06aff5f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
