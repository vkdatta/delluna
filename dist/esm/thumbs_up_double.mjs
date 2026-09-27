export const name="thumbs_up_double";
export const id="dl_522da4caf75ff2ac801f";
export const url=new URL("../icons/thumbs_up_double.svg?v=2d29f45c2971811d653e7530171aa61c4fbbe372aac7f2bd1d35555b710cdf47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
