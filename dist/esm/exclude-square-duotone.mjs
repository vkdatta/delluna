export const name="exclude-square-duotone";
export const id="dl_bcee857fae4b473a88fa";
export const url=new URL("../icons/exclude-square-duotone.svg?v=ddd9bac42dd354083a7660709e73a2c046438447d16aaf0e844ea8bfce379f73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
