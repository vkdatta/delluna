export const name="panorama_wide_angle";
export const id="dl_5e881c9112b097af5d17";
export const url=new URL("../icons/panorama_wide_angle.svg?v=dedc383a297bd13d69f15e1d5f277a9e701d818969f939467a1bbafeaf7d9455",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
