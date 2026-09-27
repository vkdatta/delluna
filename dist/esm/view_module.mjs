export const name="view_module";
export const id="dl_423c374cf3d41451fca5";
export const url=new URL("../icons/view_module.svg?v=794bcbfb4fcc4e8b52ce184ab58aa11c98c6675651be5a9790f2c74d54c55ab2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
