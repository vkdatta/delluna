export const name="cursor-click";
export const id="dl_c43510ac03dc4461a54d";
export const url=new URL("../icons/cursor-click.svg?v=76761034348520543f7cfbf9cb0439697f7790b2f7dff30ae4eb4a82cf034c8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
