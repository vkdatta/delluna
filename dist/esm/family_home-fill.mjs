export const name="family_home-fill";
export const id="dl_209fe4458961ac098463";
export const url=new URL("../icons/family_home-fill.svg?v=4338d38ea29c9239b1cecde7f148bc1f53dfe1327e387dca92e105dfd3ee167e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
