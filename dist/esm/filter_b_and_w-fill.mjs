export const name="filter_b_and_w-fill";
export const id="dl_bedebffc2c3331ac2c8c";
export const url=new URL("../icons/filter_b_and_w-fill.svg?v=8b7835be3b97b5583837d1d921ab65e7196ba7314a629dadafee90d27fc82490",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
