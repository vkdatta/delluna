export const name="egg-fill";
export const id="dl_388b06aeaaa941f49610";
export const url=new URL("../icons/egg-fill.svg?v=c9b5953ced472dd1698efe1afe8f531cc1977845e1cdf7494a105908fba1cfc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
