export const name="pencil-simple-duotone";
export const id="dl_fc36b873025c444192c8";
export const url=new URL("../icons/pencil-simple-duotone.svg?v=74ae27dd3ad3715b3a27c30dba462c53354c2f9a049099ccc36145a860f59598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
