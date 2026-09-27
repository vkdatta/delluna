export const name="input_circle-fill";
export const id="dl_6e47814912ea71a5eaee";
export const url=new URL("../icons/input_circle-fill.svg?v=f95dfd4dd023d52cfc0a6d66f79a4f0afa10abfa3133abf25cb3d86ab3c31db8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
