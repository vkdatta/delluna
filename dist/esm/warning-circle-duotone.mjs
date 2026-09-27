export const name="warning-circle-duotone";
export const id="dl_2afb4c974ac2bfb3dbe3";
export const url=new URL("../icons/warning-circle-duotone.svg?v=9608d01dc67250ccf04f71f8826cf412088a7fda9659d30d530446d1ea1be7d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
