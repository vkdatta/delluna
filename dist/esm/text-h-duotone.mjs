export const name="text-h-duotone";
export const id="dl_9578ccd6811cb49bdf05";
export const url=new URL("../icons/text-h-duotone.svg?v=1cd71a50e617d6d2c28b757e395ad31c4adfc6e54683951a02d26fa919d0b6bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
