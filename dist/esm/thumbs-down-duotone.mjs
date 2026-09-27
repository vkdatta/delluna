export const name="thumbs-down-duotone";
export const id="dl_d0ec7e9471d6561d53ea";
export const url=new URL("../icons/thumbs-down-duotone.svg?v=43342360766b305000c048a8eb62c18186bfff931e7a8ca94646096f7b02f384",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
