export const name="subtitles-duotone";
export const id="dl_a994b3cfe3d85068ff10";
export const url=new URL("../icons/subtitles-duotone.svg?v=968d0eec5210fc3795c4586a06c7ec66c12bce061163bb2c7620415348a62e77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
