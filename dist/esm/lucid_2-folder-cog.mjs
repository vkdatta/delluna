export const name="lucid_2-folder-cog";
export const id="dl_648a908b01724c33b97b";
export const url=new URL("../icons/lucid_2-folder-cog.svg?v=87c928a35e92565d87e2ee07846781e7f69e986161ba84ef405bc1720cd09024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
