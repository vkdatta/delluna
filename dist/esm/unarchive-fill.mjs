export const name="unarchive-fill";
export const id="dl_2a70a2f123ad4a65836c";
export const url=new URL("../icons/unarchive-fill.svg?v=dc7dadef288a64879e8aac91e9573ae83245e29c7f71d55e26d344f417559f98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
