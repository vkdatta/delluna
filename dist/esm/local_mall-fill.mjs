export const name="local_mall-fill";
export const id="dl_f630bb4213644f59aae9";
export const url=new URL("../icons/local_mall-fill.svg?v=c8020abc24fc6e4d02d894aec7ac690fe1db8700c359f3f9932fd7c30ded314d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
