export const name="control-duotone";
export const id="dl_883d3143d2f94dff9754";
export const url=new URL("../icons/control-duotone.svg?v=aeac4ccbd36cdb73e39e96534f363d04adafdceb3f1b472e95f607b45aea73b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
