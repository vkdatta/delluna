export const name="slab_serif";
export const id="dl_0c54c860b0d136311a1a";
export const url=new URL("../icons/slab_serif.svg?v=f0fc32f474f71314937ab48f740f3272875111b0da60569e7ca30cfd765b4533",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
