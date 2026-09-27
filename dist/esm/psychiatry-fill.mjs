export const name="psychiatry-fill";
export const id="dl_de24a5dd78362c4af429";
export const url=new URL("../icons/psychiatry-fill.svg?v=7602a8ac56e622ab131d872593f1f02a360a4ce5ef8d23d1ca997200fdf3828d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
