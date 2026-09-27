export const name="forward_circle-fill";
export const id="dl_2c4db4197f92448713a5";
export const url=new URL("../icons/forward_circle-fill.svg?v=a9683618315cbd8dd2d1062c5a278f3c34c1437347b1b937c4069102ebeebdae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
