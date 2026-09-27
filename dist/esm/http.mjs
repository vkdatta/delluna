export const name="http";
export const id="dl_c1cafb6aa6844907f8c5";
export const url=new URL("../icons/http.svg?v=030c3c075af97193b01568aab7d8d67fde6271899ccbd0441beeee737aef913f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
