export const name="blender-fill";
export const id="dl_5acd540d57de4ae590ba";
export const url=new URL("../icons/blender-fill.svg?v=45dceb52ff155f41beb55acd67585da2c39a05c4e86dd9a2c38e6276c5c6da5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
