export const name="stop";
export const id="dl_be6297ebae587c46d4ac";
export const url=new URL("../icons/stop.svg?v=4185dc82730845ffb2b65c7a08ca0b82e35709e725e739b96e04821b41175b6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
