export const name="arrows-in-simple-duotone";
export const id="dl_56700416015a41a2a71f";
export const url=new URL("../icons/arrows-in-simple-duotone.svg?v=1fc09560f24f978063925045a4a945ec4c54a47600c7d61f67f135dcc6915b9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
